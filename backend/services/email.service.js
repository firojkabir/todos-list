const { transporter } = require('../utils/nodemailer')
const path = require('path')

function sendEmail(properties) {
  transporter
    .sendMail(properties)
    .then((info) => {
      console.log({ info });
    })
    .catch(console.error);
}

function sendWelcomeEmail(user) {
	const properties = {
		to: user.email,
		subject: 'Welcome to todo-list application',
		html: `Hello ${user.name}!!<br />Thank you for your registration. Stay with us for upcoming events.`
	}
	sendEmail(properties)
}

function sendEmailForNewTodo(user, todo) {
	const properties = {
		to: user.email,
		subject: 'New todo created',
		context: { userName: user.name, todoTitle: todo.title },
		template: 'new-todo'
	}
	sendEmail(properties)
}

function sendTodoViaEmail(user, todo) {
	const properties = {
		to: user.email,
		subject: 'Query Todo by ID',
		context: { userName: user.name, todoTitle: todo.title },
		template: 'new-todo',
		attachments: [
			{ filename: `${todo.title}.pdf`, path: path.resolve(`${process.cwd()}/static/pdf/${todo.id}.pdf`)}
		]
	}
	sendEmail(properties)
}

function sendTodolistViaEmail(user) {
	const properties = {
		to: user.email,
		subject: 'Query Todos',
		context: { userName: user.name },
		template: 'todo-list',
		attachments: [
			{ filename: `${user.name}-todolist.pdf`, path: path.resolve(`${process.cwd()}/static/pdf/${user.id}-todo-list.pdf`)}
		]
	}
	sendEmail(properties)
}

function sendOTPViaEmail(user, otp) {
	const properties = {
		to: user.email,
		subject: 'OTP for Password Reset',
		context: { userName: user.name, otp: otp },
		template: 'otp',
	}
	sendEmail(properties)
}

module.exports = {
	sendWelcomeEmail,
	sendEmailForNewTodo,
	sendTodoViaEmail,
	sendTodolistViaEmail,
	sendOTPViaEmail
}

const fs = require('fs');
const PDFDocument = require('pdfkit');

function generateTodoPDF(todo) {
	const path = `/media/rimon/393E6A7169E0ED6F/todo-api/static/pdf/${todo._id}.pdf`
	let doc = new PDFDocument({ margin: 50 });

	generateContent(doc, todo.getPDFContent());

	doc.end();
	doc.pipe(fs.createWriteStream(path));
}

function generateTodoListPDF(todos, user) {
	const path = `/media/rimon/393E6A7169E0ED6F/todo-api/static/pdf/${user._id}-todo-list.pdf`
	let doc = new PDFDocument({ margin: 50 });
	const todoListContent = todos.map((todo) => todo.getPDFContent()).join('\n')

	generateContent(doc, todoListContent);

	doc.end();
	doc.pipe(fs.createWriteStream(path));
}

function generateContent(doc, textContent) {
	doc.fontSize(10)
	   .text(textContent, 50, 50);
}

module.exports = {
	generateTodoPDF,
	generateTodoListPDF
};
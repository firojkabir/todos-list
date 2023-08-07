const mongoose = require("mongoose")
const request = require("supertest")
const app = require("../index")

require("dotenv").config()

beforeEach(done => {
	mongoose.connect(process.env.DB_URL)
	done()
})

afterEach(done => {
	mongoose.connection.close()
	done()
})

// describe('User /login', () => {
// 	it('should login user', async () => {
// 		const res = await request(app).post("/auth/login").send({
// 			email: "chris@mail.com",
// 			password: "asd123",
// 		})
// 		expect(res.statusCode).toBe(200)
// 	})
// })

describe('Get all users', () => { 
	it('should return all users', async () => {
		const res = await request(app).get('/users')
		expect(res.statusCode).toBe(200)
		expect(res.body.length).toBeGreaterThan(0)
	})
})

describe("Create user", () => {
	it('should create an user', async () => {
		const res = await request(app).post('/auth/register').send({
			name: 'Taylor2',
			email: 'taylor2@gmail.com',
			password: 'asd123',
			age: 29,
			country: 'USA2'
		})
		expect(res.statusCode).toBe(201)
		expect(res.body.name).toBe('Taylor2')
	})
})

describe('Get user by id', () => {
	it('should return an user', async () => {
		const res = await request(app).get('/users/645bbaa5e95cd352668885bb')
		expect(res.statusCode).toBe(200)
		expect(res.body.email).toBe('taylor@gmail.com')
	})
})

describe('Update user', () => {
	it('should update an user', async () => {
		const res = await request(app).put('/users/645bbaa5e95cd352668885bb').send({
			name: 'Taylor S',
			email: 'taylor@gmail.com',
			password: 'asd123',
			age: 29,
			country: 'USA'
		})
		expect(res.statusCode).toBe(200)
		expect(res.body.name).toBe('Taylor S')
	})
})

describe('Delete user', () => {
	it('should delete an user', async () => {
		const res = await request(app).delete('/users/645bd3a8437d7578d8c3a4bc')
		expect(res.statusCode).toBe(200)
	})
})

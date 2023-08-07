function generateOTP() {
	return Math.round(Math.random()*100000)
}

module.exports = { generateOTP }
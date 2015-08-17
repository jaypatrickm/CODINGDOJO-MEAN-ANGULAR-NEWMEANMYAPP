module.exports = function(app) {
  	var users = require('../controllers/users.js')

    // Index
	app.get('/users', function(request, response) { 
		console.log("herere", response)
		users.retrieve(request, response) 
	})
	// New
	app.get('/users/new', function(request, response) { users.brandNew(request, response) })
	// Create
	app.post('/users', function(request, response) { users.create(request, response) })	
}
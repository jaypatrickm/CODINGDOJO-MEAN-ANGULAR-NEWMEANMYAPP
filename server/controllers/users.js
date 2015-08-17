var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
  	return {
  		retrieve: function(request, response){
  			User.find({}, function(err, users){
  				response.json(users);
  			})
  		},
  		create: function(request, response){
 			var user = new User(request.body)
  			user.save(function(err, record){
  				if(err){
  					response.json({status:'failed', err:err})
  				}else{
  					response.json({status:'success'})
  				}
  			})
  		}
  	}
})()
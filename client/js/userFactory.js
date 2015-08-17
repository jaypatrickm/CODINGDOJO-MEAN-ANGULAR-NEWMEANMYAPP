myApp.factory('UserFactory', function($http){
		// var users = [{name:'Person1', age:22},{name:'Person2', age:32}];

		return {
			getUsers: function(callback){
				$http.get('/users').success(function(returned_data){
					console.log("BACK FROM SERVER", returned_data)
					callback(returned_data);
				})
			},
			addUser: function(newUser, callback){
				$http.post('/users', newUser).success(function(returned_data){
					callback();
				})
			}
		}
	})
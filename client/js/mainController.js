myApp.controller('mainController', function($scope, UserFactory){
		
		var updateUsersList = function(){
			UserFactory.getUsers(function(users){
				$scope.users = users;
			})
		}
		updateUsersList();
		
		$scope.addUser = function(newUser){ 
			UserFactory.addUser(newUser, function(){ 
				updateUsersList();
			});
			$scope.newUser = {};
		}
	})
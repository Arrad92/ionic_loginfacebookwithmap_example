angular.module('services', [])

.service('UserService', function() {

//for the purpose of this example I will store user data on ionic local storage but you should save it on a database

  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
})
.service('markersMgr',function(){
 
 	this.markers = [];
 
 	this.addMarker = function(map,position){
 		var marker = new google.maps.Marker({
           position: position,
           map: map          
         });
         this.markers.push(marker);
 	};
 
 	this.removeMarkers = function(){		
 		angular.forEach(this.markers, function(value,key){
 			value.setMap(null);
 		});
 	};
 
 });

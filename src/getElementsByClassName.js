// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
   var result = [];

  function check (item) {
    if (item.classList.contains(className)) { 
  		result.push(item);
  	}
  	if (item.hasChildNodes()) {
  		for (var i = 0; i<item.children.length; i++) {
  			check(item.children[i]);
  		}
  	}
  }
  check(document.body);
  return result;
};

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringArray=[];
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  }
  else if (typeof obj === 'string') return '"'+obj+'"';
  else if (typeof obj === 'object' && Array.isArray(obj)) {
    for (var i = 0; i<obj.length; i++) {
      stringArray.push(stringifyJSON(obj[i]))
    }
    return '[' + stringArray + ']' ;
  } else {
  var stringObj = [];
      for (var key in obj) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          continue
        } else {
          stringObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + stringObj + '}';
    }
};
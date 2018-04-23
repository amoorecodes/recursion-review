// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'number'){
    return obj.toString();
  }
  //conditional statement for strings
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  //conditional statement for boolean
  if(typeof obj === 'boolean'){
    return '' + obj;
  }
  //conditional statement for null
  if(obj === null){
    return '' + obj;
  }
  //conditional statement for undefined
  if(obj === undefined){
    return '' + obj;
  }
  //conditional statement for arrays
      /*
      we need to test igf obj is array
      iterate through array
      perform stringifyJSON on every element
      return in JSON format using .join
      */
  if(Array.isArray(obj)){
    var result = [];
    for(var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  //conditional statement for non-array objects
    /*
    test if obj is object
    iterate through each key
    perform stringifyJSON on each key and value and store in array
    return in JSON format using .join on array
    
    */
  if(typeof obj === 'object') {
    var result = [];
    for(var key in obj) {
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result.join(',') + '}';
  }
};

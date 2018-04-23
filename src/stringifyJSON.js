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
  
  //conditional statement for non-array objects
};

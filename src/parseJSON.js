// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // write out simple cases
  if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === 'null') {
    return null;
  } else if (json === 'undefined') {
    return undefined;
  } else if (json[0] === '"' && json[json.length - 1] === '"') {
    return json;
  } else if (!isNaN(json)) {
    return Number(json);
  } else if (json[0] === '[' && json[json.length - 1] === ']') {
    
  }
  //array conditional
  //object conditional
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  /*
  start at the top node go down through the tree
  check every node for the class
  check every node for children w/ class
  use recursive pattern until reaches base case
  base case === no more children
  */

  var results = [];

  var hasChildren = function (input) {
    if (input.classList !== undefined) {
      if (input.classList.contains(className)) {
        results.push(input);
      }  
    }
    if (input.hasChildNodes()) {
      input.childNodes.forEach(child => hasChildren(child));
    }
  };

  hasChildren(document.body);
  return results;

};


/*



*/
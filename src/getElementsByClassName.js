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

  var parent = document.body;
  var results = [];
  if (parent.hasChildNodes()) {
    var allNodes = document.body.childNodes;
    for (var i = 0; i < allNodes.length; i++) {
      if (allNodes[i].classList.hasOwnProperty(className)) {
        results.push(allNodes[i]);
      }
      //if(allNodes[i].hasChildNodes())
    }
  }

};

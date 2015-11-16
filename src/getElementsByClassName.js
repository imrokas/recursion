// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  // set node to a default value if no node is supplied.
  node = node || document.body;
  
  var nodes = [];
  
  var parts = node.className.split(' ');
  //Check if the class name is used in the current node
  if (parts.indexOf(className) >= 0) {
    //if it is, push the element to the nodes array
    nodes.push(node);
  }
  //Iterate over any child nodes.
  for (var i = 0; i < node.children.length; i++) {
    var childResults = [];
    childResults = getElementsByClassName(className, node.children[i]);
    
    nodes = nodes.concat(childResults);
  }
  
  return nodes;
};

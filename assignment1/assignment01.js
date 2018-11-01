/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var studentName = "Seung Ho Nam";
var numberOfCourses = "WEB222SDD";
var program = "CPD";
var partTimeJob = false;

if(partTimeJob === true){
  partTimeJob = "have";
}
else {
  partTimeJob = "don't have";
}
console.log("My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester and I " + partTimeJob + " a part-time job now.");
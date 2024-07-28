// DrawTriangle.js (c) 2012 matsuda
// TA Jihao helped me debug some lines of code
// ChatGPT also helped me with some code, I labeled with a comment where chatgpt helped me
// I used other resources which helped me with the development of this code, and I linked them accordingly on where I used them in my code
// A lot of the starter code was inspired by the TA Lab 0 videos linked in the course canvas

/*Notes to Grader:

Notes to grader: A lot of the starter code I used was from Lab0 videos linked on the class canvas page. I used various resources to help me write my code. Addidtionally, I recieved help from TA Jihao and Wendy the course tutor to help me debug some parts of my code. The resources I used to help me write and debug some of my code are chatgpt, stackoverflow, youtube, and www.w3resource.com. I commented in my code wherever I used ChatGPT or other websites that I gained inspiration from when writing my code snippets.

Additional notes: In my github page, asgn0.html is actually named index.html. I did this in order for my page to display properly, but it holds the same exact code as my asgn0.html file in my canvas submission. In my submission on canvas, asgn0.html is present instead of index.html.*/
glb = {}
let v1 = new Vector3([2.25, 2.25, 0]).elements;  //TA Jihao told me to place this line of code here.

function main() {  
  glb.canvas = document.getElementById('example');     //2d area where we draw our objects
  if (!glb.canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  }
  // Retrieve <canvas> element
  // Get the rendering context for 2DCG
  glb.ctx = glb.canvas.getContext('2d');

  // Draw a blue rectangle
  glb.ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  glb.ctx.fillRect(0, 0, glb.canvas.width, glb.canvas.height);        // Fill a rectangle with the color
  drawVector(v1, "red");
  
}

main();
// Part 2 of Asgn0
// Instantiate a vector v1 using Vector3 class from cuon-matrix.js library (chatgpt)



function drawVector(v, color){
  //console.log(v);
  //glb.canvas = document.getElementById('example');
  let cx = glb.canvas.width/2; //center of canvas
  let cy = glb.canvas.height/2; //center of canvas

  glb.ctx.strokeStyle = color

  glb.ctx.beginPath();
  glb.ctx.moveTo(cx, cy);
  glb.ctx.lineTo((200+v[0]*20), (200-v[1]*20)) //TA Jihao helped me with this line of code
  glb.ctx.stroke();

}


 //Part 3 of Asgn0 
function handleDrawEvent(){
  glb.ctx.clearRect(0, 0, glb.canvas.width, glb.canvas.height) //chat gpt helped me come up with this line of code to debug, I realized its the same as a line above.
  glb.ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  glb.ctx.fillRect(0, 0, glb.canvas.width, glb.canvas.height);

  let x = parseFloat(document.getElementById("x_val").value); //chat gpt suggested I use parseflot to convert text to number
  let y = parseFloat(document.getElementById("y_val").value);

  let x2 = parseFloat(document.getElementById("x_val2").value);  
  let y2 = parseFloat(document.getElementById("y_val2").value);  

  glb.ctx.strokeStyle = 'red';

  let cx = glb.canvas.width/2; //center of frame
  let cy = glb.canvas.height/2;  //center of frame
  

  glb.ctx.beginPath();
  glb.ctx.moveTo(cx, cy);
  glb.ctx.lineTo(cx + x * 20, cy - y * 20);
  glb.ctx.stroke();

  glb.ctx.strokeStyle = 'blue';
  glb.ctx.beginPath();
  glb.ctx.moveTo(cx, cy);
  glb.ctx.lineTo(cx + x2 * 20, cy - y2 * 20);
  glb.ctx.stroke();

} 

//Part 5 of asgn 0
function handleDrawOperationEvent(){
  //clear canvas lines (3)
  glb.ctx.clearRect(0, 0, glb.canvas.width, glb.canvas.height) //chat gpt helped me come up with this line of code
  glb.ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  glb.ctx.fillRect(0, 0, glb.canvas.width, glb.canvas.height);

  let x1 = parseFloat(document.getElementById("x_val").value); 
  let y1 = parseFloat(document.getElementById("y_val").value);

  drawVector([x1, y1], "red");   //chat gpt helped me learn how to combine the array indeces into a single vector here in order for drawvector() to accept 2 total arguments


  let x2 = parseFloat(document.getElementById("x_val2").value);  
  let y2 = parseFloat(document.getElementById("y_val2").value);  

  drawVector([x2, y2], "blue"); 

/*  This is my original code for point 4 for part 5 of the assignment, it wasn't working and I tried debugging with my methods but it wasn't working. So, I asked chatgpt for help.
  let op = document.getElementById("math-ops").value
  let add_result;
  if (op == 'add'){
    add_result = Vector3.add([[x1, y1], [x2, y2], 0])
    drawVector([add_result[0], add_result[1]], "green");

  }
*/ 

//This is my modified code block with Chatgpt's suggestions. It instantiated Vector3 into coordinates and then called the function. Still satisfies add method for vectors 
let op = document.getElementById("math-ops").value

if (op == 'add'){
  let vector1 = new Vector3([x1, y1]);
  let vector2 = new Vector3([x2, y2]);
  let add_result = vector1.add(vector2);
  drawVector([add_result.elements[0], add_result.elements[1]], "green");
}

// end of chatgpt's suggested code block


if (op =='sub'){  //Here I just modified what I already learned in last block
  let vector1 = new Vector3([x1, y1]);
  let vector2 = new Vector3([x2, y2]);
  let sub_result = vector1.sub(vector2);
  drawVector([sub_result.elements[0], sub_result.elements[1]], "green");
}

if (op =='mul'){  //Here I just modified what I already learned in last block 
  let scalar = parseFloat(document.getElementById("scalar").value);  
  let v1 = new Vector3([x1, y1]);
  let v3 = v1.mul(scalar);
  drawVector([v3.elements[0], v3.elements[1]], "green");

  let v2 = new Vector3([x2, y2]);
  let v4 = v2.mul(scalar);
  drawVector([v4.elements[0], v4.elements[1]], "green");
}

if (op =='div'){  //Here I just modified what I already learned in last block
  let scalar = parseFloat(document.getElementById("scalar").value);  
  let v1 = new Vector3([x1, y1]);
  let v3 = v1.div(scalar);
  drawVector([v3.elements[0], v3.elements[1]], "green");

  let v2 = new Vector3([x2, y2])
  let v4 = v2.div(scalar);
  drawVector([v4.elements[0], v4.elements[1]], "green");
}

if (op == 'magn'){
  let magn_vect1 = new Vector3([x1, y1, 0])
  let magn_vect2 = new Vector3([x2, y2, 0])

  magnitude1 = magn_vect1.magnitude()
  magnitude2 = magn_vect2.magnitude()

  console.log("Magnitude v1:", magnitude1)
  console.log("Magnitude v2:", magnitude2)
}

if (op == 'norm'){
  let norm_vect1 = new Vector3([x1, y1, 0])
  let norm_vect2 = new Vector3([x2, y2, 0])

  norm1 = norm_vect1.normalize()
  norm2 = norm_vect2.normalize()

  drawVector([norm1.elements[0], norm1.elements[1]], "green");
  drawVector([norm2.elements[0], norm2.elements[1]], "green");

}

  if (op == 'dot'){
    let v1 = new Vector3([x1, y1, 0]);
    let v2 = new Vector3([x2, y2, 0]);
    angleBetween(v1, v2);          //call angleBetween in this function
  }
// Tutor Wendy helped me debug this if statement below

  if (op == 'Area'){
    let v1 = new Vector3([x1, y1, 0]);
    let v2 = new Vector3([x2, y2, 0]);
    areaTriangle(v1, v2);
  }
}

function angleBetween(v1, v2){

  // look at magnitude function, no drawing required
  var pi = Math.PI; //learned from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-34.php

  let dot_prod = Vector3.dot(v1, v2);
 
  let magv1 = v1.magnitude();
  let magv2 = v2.magnitude();

  let cos_theta = ((dot_prod)/(magv1 * magv2));  //inverse cosine this

  let angle = Math.acos(cos_theta);  //looked at the web for arc cos function in javascript and acos is a built-in function to javascript that I can use here.

  let angle_degrees = angle * (180/pi)

  console.log("Angle:", angle_degrees)

}

// Tutor Wendy helped me debug this function
function areaTriangle(v1, v2){
  
  let cross_prod = Vector3.cross(v1, v2);

  let area = (cross_prod.magnitude() / 2);

  console.log("Area of triangle", area)
}
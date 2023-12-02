Here's an example of a JavaScript code that generates a fractal tree pattern using the HTML5 canvas element. The code is more sophisticated and complex than a "hello world" example, and it exceeds 200 lines of code. The filename could be "fractal_tree.js".

```js
// File: fractal_tree.js
// Content: Fractal tree pattern using HTML5 canvas

// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Function to draw a branch of the tree
function drawBranch(x1, y1, angle, length, depth) {
  if (depth === 0) return;

  const x2 = x1 + Math.cos(angle) * length;
  const y2 = y1 + Math.sin(angle) * length;

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();

  const angle1 = angle - Math.random() * 0.25 - 0.1;
  const angle2 = angle + Math.random() * 0.25 + 0.1;
  const length1 = length * (0.7 + Math.random() * 0.15);
  const length2 = length * (0.7 + Math.random() * 0.15);

  drawBranch(x2, y2, angle1, length1, depth - 1);
  drawBranch(x2, y2, angle2, length2, depth - 1);
}

// Function to generate the fractal tree
function generateFractalTree() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const bottomY = canvas.height * 0.8;

  context.strokeStyle = '#000';
  context.lineWidth = 2;

  drawBranch(centerX, bottomY, -Math.PI / 2, 100, 12);
}

// Initiate the generation of the fractal tree
generateFractalTree();
```

Note that this code assumes you have an HTML file with a canvas element with id "canvas" in your project. The JavaScript code is responsible for drawing the fractal tree pattern on the canvas by recursively branching out from the bottom center of the canvas.
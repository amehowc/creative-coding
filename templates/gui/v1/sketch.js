let totalDomUnits = 0;
const c = document.getElementById("canvas");
const container = document.getElementById("canvas-container");

let img;
function setup() {
  const canvasRatio = 360 / 640;
  const canvasWidth = Math.floor(0.35 * container.clientWidth);
  const canvasHeight = Math.floor(canvasWidth / canvasRatio);
  createCanvas(canvasWidth, canvasHeight, WEBGL, c);
  importGUIComponents();
  const elt = document.getElementById("gui");
  imageMode(CENTER)
  slider("sphere-radius", [0, 1, 0.5, 0.001]);
  sliders("sliders");
  sliders("sliders02");
  sliders("sliders03");
  slider("slider02", [0, 1, 0.5, 0.001]);
  button("button");
  dropdown('dropdown')
  imageUploadButton("Add Image");
  buttons('buttons');
  colorpicker("colorpicker", ["#ffff00", "#ff00ff", "#00ffff", "#000"]);
  textinput("text-input");
  noStroke()
  // console.log(gui)
}

function draw() {
  const colors = [
    gui["colorpicker"].value(),
    gui["colorpicker1"].value(),
    gui["colorpicker2"].value(),
  ];
  lights()
  background(colors[0]);
  if (img) {
    const s = scaleTo(img.width, img.height, width, height);
    push()
    scale(s,s,1)
    image(img, 0, 0, img.width, img.height);
    pop()
    
  }
  const r = gui["sphere-radius"].value();
  const s = gui["sliders-x"].value();
  push();
  sphere(r*120,48,48);
  pop();
  
  push();
  translate(0, 240)
  box(s*120,s*120,s*120);
  pop();
}
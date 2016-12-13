var img

function setup() {img = loadImage("1.png"); 
  createCanvas(1024, 964);
 
}

function draw() {
  background(100);
  image(img, 0, 0, img.width, img.height);

  
}
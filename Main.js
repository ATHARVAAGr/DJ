music1 = "";
music2 = "";
function setup() {
  music1 = loadSound('music.mp3');
  music2 = loadSound('music2.mp3');
  canvas = createCanvas(597, 498);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  canvas.center();
  image(video, 0, 0, 597, 498);
}

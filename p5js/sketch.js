/* eslint-disable no-undef, no-unused-vars */

// These variables are just examples. feel
// free to remove them and their features.
let hue, num;

function setup() {
  createCanvas(windowWidth, windowHeight);

  hue = round(random(0, 360));
  num = round(random(1000));

  // These features can be whatever you want.
  // Setting features is optional.
  if (window.OneOfX) {
    window.OneOfX.save({
      "Random Hue": hue,
      "Random Number": num
    });
  }
}

function draw() {
  background(`hsl(${hue}, 50%, 50%)`);
  textSize(height / 4);
  textAlign(CENTER, CENTER);
  text(
    num,
    width / 2,
    height / 2 + cos(((frameCount % 100) / 100) * 2 * PI) * 50
  );
}

// Create a new div element
const cannonDiv = document.createElement("div");

const audioFile = "src/audio/yippie.wav";
const audioInstances = Array.from({ length: 5 }, () => new Audio(audioFile));
let audioCounter = 0;

// Set attributes or properties for the new div
cannonDiv.id = "confetti_cannon";

//Register div
document.body.appendChild(cannonDiv);

function playYippie(){
  const currentAudio = audioInstances[audioCounter];
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio.play();

  audioCounter++;
  if (audioCounter >= audioInstances.length) {
      audioCounter = 0; // Reset the counter when it reaches the end
  }

  const element = document.getElementById('tbh')

  element.classList.remove('shakeAnim'); // reset animation
  void element.offsetWidth; // trigger reflow
  element.classList.add('shakeAnim'); // start animation
}

function keyboardConfetti(){
  let max = 0.95;
  let min = 0.05;
  let x_pos = Math.random() * (max - min) + min;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: x_pos, y: 0.95 },
  })
  playYippie();
}

function mouseConfetti(evt){
  const { button, clicks, x, y, type } = evt;

  console.log(evt);

  const normalizedX = x / window.innerWidth;
  const normalizedY = y / window.innerHeight;

  // Increase the number of particles when a key is pressed
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: normalizedX, y: normalizedY },
  })

  playYippie();
}

window.indexBridge.keydown((event) => keyboardConfetti());

//document.addEventListener("keydown", () => keyboardConfetti());

window.indexBridge.mousedown((event, result) => mouseConfetti(result));

//document.addEventListener("mousedown", (evt) => mouseConfetti(evt));
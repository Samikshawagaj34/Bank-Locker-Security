document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});






const images = [ "./images/BANK-LOCKER1.avif","./images/face-recognition-img.jpg","./images/OTP-img.jpg", ]
let index = 0;
const slide = document.getElementById('slide');
function next()
{
    if(index < images.length -1){

    
   index++;
}
else{
    index = 0;
}
   slide.src = images[index]



}
function prev()
{
    if(index > 0){

    
   index--;
}
else{
    index = images.length -1;
}
   slide.src = images[index]



}

/*

// Load Face API.js Models
async function loadModels() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');  // Face detection
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models'); // Landmarks
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models'); // Face recognition
}

// Start the webcam for face capture
async function startCamera(videoElement) {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    videoElement.srcObject = stream;
}

// Capture image and store as face descriptor
async function captureImage() {
    
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = await faceapi.bufferToImage(canvas.toDataURL());

    // Detect face and get descriptor
    const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();

    if (detections) {
        localStorage.setItem('faceDescriptor', JSON.stringify(detections.descriptor));
        alert('Face registered successfully!');
    } else {
        alert('No face detected, try again.');
    }
}

// Compare face during login
async function verifyFace() {
    const video = document.getElementById('loginVideo');
    const canvas = document.getElementById('loginCanvas');
    const context = canvas.getContext('2d');
    const status = document.getElementById('status');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = await faceapi.bufferToImage(canvas.toDataURL());

    const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();

    if (!detections) {
        status.innerText = 'No face detected!';
        return;
    }

    const storedDescriptor = JSON.parse(localStorage.getItem('faceDescriptor'));

    if (!storedDescriptor) {
        status.innerText = 'No registered face found!';
        return;
    }

    const faceMatcher = new faceapi.FaceMatcher(storedDescriptor);
    const bestMatch = faceMatcher.findBestMatch(detections.descriptor);

    if (bestMatch.distance < 0.5) {
        status.innerText = 'Login Successful!';
        alert('Login Successful!');
        window.location.href = '../page/login.html'; // Redirect after login
    } else {
        status.innerText = 'Face does not match!';
        alert('Face does not match!');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadModels();

    if (document.getElementById('video')) {
        startCamera(document.getElementById('video'));
        document.getElementById('capture').addEventListener('click', captureImage);
    }

    if (document.getElementById('loginVideo')) {
        startCamera(document.getElementById('loginVideo'));
        document.getElementById('verify').addEventListener('click', verifyFace);
    }
});



let video;
let canvas;
let nameInput;

function init(){
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    nameInput = document.getElementById('nameInput');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            
        })
        .catch(error => {
            console.log("Error accessing webcam: ", error);
            alert("cannot access webcam.");
        });
}


function captureImage() {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block';
    video.style.display = 'none';
} */



const MODEL_URL = './models';

// Select HTML elements
const video = document.getElementById('video');
const statusMessage = document.getElementById('status');
const loginButton = document.getElementById('login');

// Load Face-API.js models
async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    console.log('Face-API models loaded');
}

// Start webcam stream
async function startVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing webcam:', error);
        statusMessage.textContent = 'Unable to access the camera. Please allow camera access.';
    }
}

// Detect a single face
async function detectFace() {
    const options = new faceapi.TinyFaceDetectorOptions();
    const result = await faceapi.detectSingleFace(video, options);

    if (result) {
        statusMessage.textContent = 'Face detected successfully!';
        console.log('Face detected:', result);
        // Allow form submission
        document.querySelector('.login-form').submit();
    } else {
        statusMessage.textContent = 'No face detected. Please try again.';
    }
}

// Event listener for login button
loginButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent form submission until face detection
    await detectFace();
});

// Load models and start video on page load
window.addEventListener('load', async () => {
    await loadModels();
    await startVideo();
});
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs5HAeKd4BJVe73HNuAUgbMXZsywXlvMk",
  authDomain: "save-feedback.firebaseapp.com",
  databaseURL: "https://save-feedback-default-rtdb.firebaseio.com",
  projectId: "save-feedback",
  storageBucket: "save-feedback.appspot.com",
  messagingSenderId: "892913337670",
  appId: "1:892913337670:web:555b299ff99f7bd79b5147",
  measurementId: "G-6REBBM5ZE6"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Reference to your Firebase database
const database = firebase.database();
const feedbackRef = database.ref("feedback");

function submitFeedback() {
    const name = document.getElementById('name').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    // Check if input fields are not empty
    if (name === '' || feedback === '') {
        alert('Please enter your name and feedback before submitting.');
        return; // Exit the function if any input field is empty
    }

    saveFeedback(name, feedback);

    // Clear form fields
   
    document.getElementById('name').value = '';
    document.getElementById('feedback').value = '';

    // Show success message or perform other actions
   //alert('Feedback submitted successfully!');
   window.location.href = 'thanks.html';
  
  
}


function saveFeedback(name, feedback) {
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' };
    const timestamp = new Date().toLocaleString('en-IN', options); // Get current timestamp in Indian time zone
    feedbackRef.push({
        name: name,
        feedback: feedback,
        timestamp: timestamp // Add timestamp to the feedback data
    });
}

 



function showFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'block';
    // Trigger animation for input fields
    document.getElementById('name').style.transform = 'translateX(0)';
    document.getElementById('feedback').style.transform = 'translateX(0)';
  
}

// Call the showFeedbackModal function when the page loads
window.onload = showFeedbackModal;
 


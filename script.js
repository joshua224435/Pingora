// Handle Login
function login() {
    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;

    if (emailOrPhone && password) {
        // Fake login - Just hide auth and show chat
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("chat-container").style.display = "flex";

        // Also change background color
        document.body.className = "chat-page";
    } else {
        alert("Please fill all fields!");
    }
}

// Handle Sign Up (Fake)
function signup() {
    alert("Signup successful! Please login now.");
}

// Handle Sending Messages
function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value;

    if (messageText.trim() !== "") {
        let messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = messageText;
        document.getElementById("messages").appendChild(messageDiv);

        // Auto-scroll
        let messagesDiv = document.getElementById("messages");
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear input
        messageInput.value = "";
    }
}

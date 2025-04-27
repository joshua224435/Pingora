function sendMessage() {
    let message = document.getElementById("messageInput").value;
    if (message !== "") {
        let messageContainer = document.createElement("div");
        messageContainer.classList.add("message");
        messageContainer.textContent = message;

        // Add message to the chat window
        document.getElementById("messages").appendChild(messageContainer);

        // Clear input field
        document.getElementById("messageInput").value = "";

        // Auto scroll to the latest message
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }
}

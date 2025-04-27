/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

/* Login/Signup Page */
.login-page {
    background: linear-gradient(to right, #667eea, #764ba2);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.login-container h1 {
    margin-bottom: 20px;
    color: #333;
}

.login-container input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-container button {
    background: #667eea;
    color: white;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
}

.login-container button:hover {
    background: #5a67d8;
}

.login-container p {
    margin-top: 15px;
}

/* Chat Page */
.chat-page {
    background-color: #f7f9fc;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.chat-container {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    height: 90vh;
}

.header {
    background-color: #667eea;
    padding: 15px;
    color: white;
    text-align: center;
}

.messages {
    padding: 10px;
    height: 100%;
    overflow-y: auto;
    background-color: #e5e5e5;
    flex-grow: 1;
}

.message {
    margin: 8px;
    padding: 10px;
    background-color: #d4f1f4;
    border-radius: 10px;
    max-width: 70%;
}

.input-container {
    display: flex;
    padding: 10px;
    background: #f1f1f1;
}

input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background: #667eea;
    color: white;
    padding: 10px 15px;
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #5a67d8;
}

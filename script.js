// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaHbWQe6_KKVk4geBvCZpJci8uhP-ziac",
  authDomain: "pingora-9253a.firebaseapp.com",
  projectId: "pingora-9253a",
  storageBucket: "pingora-9253a.appspot.com",
  messagingSenderId: "1086811339661",
  appId: "1:1086811339661:web:eac94693942cb49782dbc4"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Sign up successful! Please log in.');
    })
    .catch(error => {
      alert(error.message);
    });
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('auth-container').style.display = 'none';
      document.getElementById('chat-container').style.display = 'block';
      loadMessages();
    })
    .catch(error => {
      alert(error.message);
    });
}

function logout() {
  auth.signOut().then(() => {
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'flex';
  });
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  const user = auth.currentUser;

  if (message.trim() !== "") {
    db.collection('messages').add({
      text: message,
      user: user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    messageInput.value = "";
  }
}

function loadMessages() {
  db.collection('messages')
    .orderBy('timestamp')
    .onSnapshot(snapshot => {
      const messagesDiv = document.getElementById('messages');
      messagesDiv.innerHTML = "";
      snapshot.forEach(doc => {
        const message = doc.data();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.user}: ${message.text}`;
        messagesDiv.appendChild(messageElement);
      });
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
}

const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const userName = prompt("Enter your name to join : ");
socket.emit('new-user-joined',userName);

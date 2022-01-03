// Create Variables and grab the ids from the html
let msgs = document.getElementById('chatMessages');
let txtbox = document.getElementById('textbox');
let sendBtn = document.getElementById('button');

// Create an eventlistener for the send button
sendBtn.addEventListener("click", function() {
    let newMsg = document.createElement("ul");
    newMsg.innerHTML = txtbox.value;
    chatMessages.appendChild(newMsg);
    txtbox.value = "";
});
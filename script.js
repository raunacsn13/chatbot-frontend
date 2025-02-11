async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chat-box");

    // User message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Send request to backend
    const response = await fetch("https://chatbot-backend-ew5q.onrender.com/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "12345", message: userInput })
    });

    const data = await response.json();

    // Bot reply
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot");
    botMessage.textContent = data.reply;
    chatBox.appendChild(botMessage);

    document.getElementById("user-input").value = "";
}

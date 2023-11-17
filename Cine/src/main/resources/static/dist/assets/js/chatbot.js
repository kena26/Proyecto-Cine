document.addEventListener("DOMContentLoaded", function () {
	const chatMessages = document.getElementById("chat-messages");
	const userInput = document.getElementById("user-input");
	const sendButton = document.getElementById("send-button");
	const chatbotContainer = document.getElementById("chatbot-container");
	const chatbotContainerOpen = document.getElementById("chatbot-container-open");
	const chatbotImage = document.getElementById("chatbot-image");
	const closeChatbotButton = document.getElementById("close-chatbot");

	chatbotImage.addEventListener("click", function () {
		chatbotContainer.style.display = "block";
		chatbotContainer.style.position = "sticky";
	});

	closeChatbotButton.addEventListener("click", function () {
		chatbotContainer.style.display = "none";
	});
	closeChatbotButton.addEventListener("mouseover", function () {
		closeChatbotButton.style.color = "red";
	});

	closeChatbotButton.addEventListener("mouseout", function () {
		closeChatbotButton.style.color = "black";
	});

	sendButton.addEventListener("click", function () {
		const userMessage = userInput.value.trim().toLowerCase();

		if (userMessage) {
			addMessage("Tú", userMessage, true);
			handleUserInput(userMessage, false);
			userInput.value = "";
		}
	});

	userInput.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			sendMessage();
		}
	});

	setInterval(moveContainer,100);
	function moveContainer(){

        if (chatMessages.querySelector('div') !== null) {
            chatbotContainer.classList.add("chatbot-container-open");
			chatMessages.style.height="300px";
        } else {
            chatbotContainer.classList.remove("chatbot-container-open");
        }
	}

	function sendMessage() {
		const userMessage = userInput.value.trim().toLowerCase();

		if (userMessage) {
			addMessage("Tú", userMessage, true);
			handleUserInput(userMessage, false);
			userInput.value = "";
		}
	}
	function scrollChatToBottom() {
		const chatMessages = document.getElementById("chat-messages");
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}
	function addMessage(sender, message, isUser) {
		const messageDiv = document.createElement("div");
		messageDiv.classList.add("message");
		messageDiv.classList.add(isUser ? "user-message" : "bot-message");

		const messageContent = document.createElement("div");
		messageContent.innerHTML = `<strong>${sender}</strong>: ${message}`;
		messageDiv.appendChild(messageContent);

		chatMessages.appendChild(messageDiv);
		scrollChatToBottom();
	}

	function handleUserInput(userMessage, isUserImage) {
		const responses = {
			"hola": "¡Hola! ¿En qué puedo ayudarte?",
			"¿cómo estás?": "Estoy bien, gracias por preguntar.",
			"ayuda": "Opciones disponibles: <br>'hola', '¿cómo estás?', 'ayuda'.<br>",
		};

		const response =
			responses[userMessage] ||
			"No entiendo tu pregunta. Escribe 'ayuda' para ver las opciones disponibles.";

		setTimeout(function () {
			addMessage("ChatBot", response, false, isUserImage);
		}, 1000);
	}

	function addMessage(sender, message, isUser) {
		const messageDiv = document.createElement("div");
		messageDiv.style.margin = "10px";
		messageDiv.style.padding = "10px";
		messageDiv.style.border = "1px solid #ccc";
		messageDiv.style.borderRadius = "10px";
		messageDiv.style.clear = "both";
		messageDiv.style.overflow = "hidden";
		messageDiv.style.backgroundColor = isUser ? "#bfab93" : "#EEC389";
		chatbotContainer.style.backgroundColor = "#eb9c4d";

		// Agrega la imagen de perfil al lado del nombre
		const avatar = document.createElement("img");
		avatar.src = isUser
			? "/Cine/src/main/resources/static/dist/assets/img/logo.png"
			: "/Cine/src/main/resources/static/dist/assets/img/logo.png";
		avatar.alt = isUser ? "Usuario" : "Chatbot";
		avatar.style.width = "30px"; // Ajusta el tamaño de la imagen de perfil
		avatar.style.height = "30px";
		avatar.style.borderRadius = "50%"; // Hace que la imagen sea redonda
		avatar.style.float = isUser ? "right" : "left"; // Flota la imagen a la derecha o izquierda

		const messageContent = document.createElement("div");
		messageContent.style.float = isUser ? "right" : "left"; // Flota el contenido a la derecha o izquierda
		messageContent.style.margin = isUser ? "0 50px 0 10px" : "0 10px 0 50px"; // Ajusta el margen para separar la imagen del texto
		messageDiv.style.border = "2px solid #050000";
		avatar.style.border = "1px solid #050000";

		messageContent.innerHTML = `<strong style= "font-weight: bold;">${sender}:</strong> ${message}`;

		messageDiv.appendChild(avatar);
		messageDiv.appendChild(messageContent);

		chatMessages.appendChild(messageDiv);
		scrollChatToBottom();
	}
});
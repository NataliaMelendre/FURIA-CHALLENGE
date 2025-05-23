const login = document.querySelector(".login")
const loginForm = login.querySelector(".login-form")
const loginInput = login.querySelector(".login-input")

const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat-form")
const chatInput = chat.querySelector(".chat-input")
const chatMessages =chat.querySelector(".chat-messages")

const colors =[
    "DarkOrange",
    "Aquamarine",
    "Aqua",
    "Chartreuse",
    "DeepPink",
    "GreenYellow"
]

const user = {id:"", name:"", color:""}

let websocket 

const createMessageSelfElements = (content) => {
    const div = document.createElement("div")
    div.classList.add("message-self")
    div.innerHTML = content

    return div 
}

const createMessageOtherElements = (contet, sender, senderColor) => {
    const div = document.createElement("div")
    const span = document.createElement("span")

    div.classList.add("message-other")
    span.classList.add("message-sender")
    span.style.color = senderColor

    div.appendChild(span)

    span.innerHTML = sender
    div.innerHTML += contet

    return div 
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const scrollScreen = () => {
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    })
}

const processMessage = ({data}) => {
    const {userId, userName, userColor, content} = JSON.parse(data)

    const message = userId == user.id ? createMessageSelfElements(content) : createMessageOtherElements (content, userName, userColor)


    chatMessages.appendChild(message)
    scrollScreen()
}

function handleLogin(event) {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("wss://furia-challenge.onrender.com")
    websocket.onmessage = processMessage

}

const sendMessage = (event) => {
    event.preventDefault()
    
    const message ={
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    websocket.send(JSON.stringify(message))

    chatInput.value = ""
}

loginForm.addEventListener("submit", handleLogin)
chatForm.addEventListener("submit", sendMessage)

window.addEventListener("DOMContentLoaded", () => {
    const menuChat = document.querySelector("#menu-chat");
    const menuPlayers = document.querySelector("#menu-players");
    const playersCards =document.querySelector(".players-cards")

    menuChat.addEventListener("click", (event) => {
        event.preventDefault();
        login.style.display = "flex";
        chat.style.display = "none";
        playersCards.style.display ="none";
    });
    
    menuPlayers.addEventListener("click", (event) => {
        event.preventDefault();
        login.style.display = "none";
        chat.style.display = "none";
        playersCards.style.display ="block";
    });  
});
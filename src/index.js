const messages = [
    "Oscar", "Nicolas", "Diego", "Andres", "Kaylee", "Daniel", "Paulina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };
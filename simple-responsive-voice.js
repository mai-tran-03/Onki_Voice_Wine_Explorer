// Speech Recognition (STT)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');

startBtn.onclick = () => recognition.start();

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.innerText = `You said: ${transcript}`;
    getBotResponse(transcript);
};

// replace with an API call to GPT-4/Gemini for a real bot
function getBotResponse(text) {
    let response = "I'm not sure how to help with that.";
    if (text.includes("hello")) response = "Hello! How can I help you today?";
    
    speak(response);
}

// Speech Synthesis (TTS)
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    output.innerText = `Bot: ${text}`;
}
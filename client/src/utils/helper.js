function handleAudio(string) {
  const utterance = new SpeechSynthesisUtterance(string);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];
  utterance.rate = 0.7;

  // Speak the text
  speechSynthesis.speak(utterance);
}

export { handleAudio };




function setup(){
noCanvas();
let lang= navigator.languge || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
speechRec.start();

speechRec.start();

function gotSpeech(){
  console.log(speechRec);
}
}
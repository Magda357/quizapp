let questions = [
    {
"question" : "Wer hat HTML erfunden?",
"answer_1": "Robbie Williams",
"answer_2": "Lady Gaga",
"answer_3": "Tim Berners-Lee",
"answer_4" : "Justin Bieber",
"right_answer" : 3 
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Creative Style Sheets",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Computer Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Tag wird für Absätze verwendet?",
        "answer_1": "div",
        "answer_2": "head",
        "answer_3": "p",
        "answer_4": "span",
        "right_answer": 3
    },
    {
        "question": "Was ist JavaScript?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Ein Texteditor",
        "answer_3": "Ein Betriebssystem",
        "answer_4": "Ein Grafikformat",
        "right_answer": 1
    },
    {
        "question": "Welche Firma steht hinter dem Browser Chrome?",
        "answer_1": "Microsoft",
        "answer_2": "Apple",
        "answer_3": "Google",
        "answer_4": "Mozilla",
        "right_answer": 3
    },
    {
        "question": "Was macht ein a-Tag in HTML?",
        "answer_1": "Fügt ein Bild ein",
        "answer_2": "Erstellt einen Link",
        "answer_3": "Formatiert Text fett",
        "answer_4": "Erzeugt eine Tabelle",
        "right_answer": 2
    },
    {
        "question": "Welche Sprache wird benutzt, um Webseiten zu stylen?",
        "answer_1": "HTML",
        "answer_2": "JavaScript",
        "answer_3": "CSS",
        "answer_4": "SQL",
        "right_answer": 3
    },
    {
        "question": "Welche Dateiendung hat eine JavaScript-Datei?",
        "answer_1": ".html",
        "answer_2": ".css",
        "answer_3": ".js",
        "answer_4": ".java",
        "right_answer": 3
    },
    {
        "question": "Welche HTML-Version ist aktuell die neueste?",
        "answer_1": "HTML4",
        "answer_2": "HTML5",
        "answer_3": "XHTML",
        "answer_4": "HTML 3.2",
        "right_answer": 2
    },
    {
        "question": "Was bewirkt das CSS-Attribut 'display: none;'?",
        "answer_1": "Der Text wird fett dargestellt",
        "answer_2": "Das Element wird versteckt",
        "answer_3": "Das Element bekommt einen Rahmen",
        "answer_4": "Der Hintergrund wird transparent",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet das 'src'-Attribut im <img>-Tag?",
        "answer_1": "Schriftgröße",
        "answer_2": "Seitenrand",
        "answer_3": "Datenquelle des Bildes",
        "answer_4": "Bildausrichtung",
        "right_answer": 3
    },
    {
        "question": "Wie kann man in JavaScript eine Variable deklarieren?",
        "answer_1": "v = 5;",
        "answer_2": "let v = 5;",
        "answer_3": "variable v = 5;",
        "answer_4": "set v = 5;",
        "right_answer": 2
    },
    {
        "question": "Was ist ein 'div' in HTML?",
        "answer_1": "Ein Tabellenfeld",
        "answer_2": "Ein Abschnitt oder Container",
        "answer_3": "Ein Link",
        "answer_4": "Ein Listenelement",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Boolean-Wert?",
        "answer_1": "Ein Zahlenwert",
        "answer_2": "Ein Wahr/Falsch-Wert",
        "answer_3": "Ein Text",
        "answer_4": "Ein HTML-Element",
        "right_answer": 2
    },
      {
        "question": "Welche Methode wandelt einen String in eine Zahl um?",
        "answer_1": "parseString()",
        "answer_2": "stringToNumber()",
        "answer_3": "parseInt()",
        "answer_4": "toInteger()",
        "right_answer": 3
    },
    {
        "question": "Was ist das Ziel von Responsive Webdesign?",
        "answer_1": "Bessere Farben",
        "answer_2": "Schnelleres Laden",
        "answer_3": "Anpassung an verschiedene Bildschirmgrößen",
        "answer_4": "Schutz vor Viren",
        "right_answer": 3
    },
    {
        "question": "Welche Schleife gibt es in JavaScript?",
        "answer_1": "foreach",
        "answer_2": "for",
        "answer_3": "repeat",
        "answer_4": "loop",
        "right_answer": 2
    },
     {
        "question": "Was macht die Funktion 'console.log()' in JavaScript?",
        "answer_1": "Startet eine Schleife",
        "answer_2": "Fügt HTML hinzu",
        "answer_3": "Zeigt eine Ausgabe in der Konsole",
        "answer_4": "Führt einen Serverneustart durch",
        "right_answer": 3
    },
    {
        "question": "Wozu dient das <form>-Element in HTML?",
        "answer_1": "Um Inhalte zu zentrieren",
        "answer_2": "Um Formulare zu erstellen",
        "answer_3": "Um Farben zu definieren",
        "answer_4": "Um Überschriften zu formatieren",
        "right_answer": 2
    },
    {
        "question": "Welcher dieser Begriffe ist ein JavaScript-Datentyp?",
        "answer_1": "decimal",
        "answer_2": "float",
        "answer_3": "char",
        "answer_4": "undefined",
        "right_answer": 4
    },
    {
        "question": "Was ist der Zweck von Git?",
        "answer_1": "Ein Bildbearbeitungsprogramm",
        "answer_2": "Ein Webserver",
        "answer_3": "Ein Versionskontrollsystem",
        "answer_4": "Ein Datenbankverwaltungstool",
        "right_answer": 3
    },
    {
        "question": "Wie kann man in CSS die Schriftgröße ändern?",
        "answer_1": "font-weight",
        "answer_2": "font-size",
        "answer_3": "text-style",
        "answer_4": "font-color",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut wird benötigt, um ein Textfeld im Formular verpflichtend zu machen?",
        "answer_1": "required",
        "answer_2": "validate",
        "answer_3": "mandatory",
        "answer_4": "checked",
        "right_answer": 1
    },
    {
        "question": "Welche Klammern werden für JavaScript-Blöcke verwendet?",
        "answer_1": "Runde Klammern ()",
        "answer_2": "Eckige Klammern []",
        "answer_3": "Geschweifte Klammern {}",
        "answer_4": "Spitze Klammern <>",
        "right_answer": 3
    },
    {
    "question": "Welches Attribut wird verwendet, um eine Standardeingabe in einem Textfeld festzulegen?",
    "answer_1": "default",
    "answer_2": "placeholder",
    "answer_3": "value",
    "answer_4": "input",
    "right_answer": 3
},
{
    "question": "Welches HTML-Tag wird verwendet, um ein Formular zu erstellen?",
    "answer_1": "input",
    "answer_2": "form",
    "answer_3": "fieldset",
    "answer_4": "label",
    "right_answer": 2
},
{
    "question": "Welches Attribut eines Formulars bestimmt die Ziel-URL beim Absenden?",
    "answer_1": "method",
    "answer_2": "action",
    "answer_3": "target",
    "answer_4": "href",
    "right_answer": 2
}

        


];
let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_WRONG =new Audio('audio/wrong.mp3');

function init() {
    randomGame(questions);
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
   
}

function showQuestion(){

    if(currentQuestion >= questions.length) {
        //show End screen
        document.getElementById('end-screen').style= '';
        document.getElementById('question-body').style = 'display:none';

document.getElementById('amount-of-questions').innerHTML= questions.length;
document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('progress-bar').innerHTML = `100%`;
document.getElementById('progress-bar').style = `width: 100%`;
document.getElementById('header-image').src = 'img/trophy.png';

    }else {  //show question

        let percent = (currentQuestion)  /questions.length;
        percent = Math.round(percent * 100);
      
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
       document.getElementById('progress-bar').style = `width:${percent}%`;
          console.log('Fortschritt: ' , percent);
          
          
          

    let question =  questions[currentQuestion];

document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
     document.getElementById('answer_1').innerHTML = question['answer_1'];
     document.getElementById('answer_2').innerHTML = question['answer_2'];
     document.getElementById('answer_3').innerHTML = question['answer_3'];
     document.getElementById('answer_4').innerHTML = question['answer_4'];

}
    }

function  answer(selection) { 
     let question =  questions[currentQuestion];
console.log('selected answer is ', selection);
let selectedQuestionNumber = selection.slice(-1);
console.log('selectedQuestionNumber is ' , selectedQuestionNumber);
console.log('current question is', question['right_answer']);

let idOfRightAnswer = `answer_${question['right_answer']}`;

if(selectedQuestionNumber == question['right_answer']) { //richtige Frage beantwortet
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightQuestions++;
}else {
    console.log('Falsche Antwort!!!');
    AUDIO_WRONG.play();
     document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    

}
document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
currentQuestion++; //z.b. von 0 auf 1
resetAnswerButtons();
showQuestion();


}

function resetAnswerButtons(){
    document.getElementById('next-button').disabled = true;
document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
document.getElementById('answer_1').parentNode.classList.remove('bg-success');
document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
document.getElementById('answer_2').parentNode.classList.remove('bg-success');
document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
document.getElementById('answer_3').parentNode.classList.remove('bg-success');
document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame(){
    document.getElementById('header-image').src = 'img/pencil.jpg';
    document.getElementById('question-body').style= ''; // questionBody wieder anzeigen
    document.getElementById('end-screen').style= 'display: none'; //end-screen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
     init();
     randomGame(questions);

}

function randomGame(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const quiz = [
    {"question":"When was Scooter's brand cereal launched?", "a1":"1993", "a2": "1998", "a3":"2002", "ca":1},
    {"question":"How many calories is in a  serving of Berry Collosal Crunch?", "a1":"85", "a2": "50", "a3":"124", "ca":3},
    {"question":"How many pounds of Honey Graham Toaster would it take to weigh more than a full grown bull?", "a1":"1200lb", "a2": "2400lb", "a3":"2000lb", "ca":2},
    {"question":"How much is a singular Tootie Fruity?", "a1":".0012$", "a2": ".006$", "a3":".000015$", "ca":1},
    {"question":"When in a race against a bowl of fuity pebbles, which car would reach 60 mph before said cereal got soggy?", "a1":"1959 Mini Austin Cooper 850cc mk1", "a2": "1994 ford ranger 2.3 w/ 4speed auto", "a3":"2009 Alfa romeo 159 3.2 JTS", "ca":3},
]
var correctAnswer
var score = 0
var prevQues = null



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function quizGen(){
    var quesNum = getRandomInt(5)

    //prevent immeadiate repeat questions
    if(prevQues == quesNum){
        if(prevQues==quiz.length){
            quesNum-=1
        }
        else{
            quesNum+=1 
        }
        
    }
        
    document.getElementById("question").innerHTML = quiz[quesNum].question
    document.getElementById("answerbox1").innerHTML = quiz[quesNum].a1
    document.getElementById("answerbox2").innerHTML = quiz[quesNum].a2
    document.getElementById("answerbox3").innerHTML = quiz[quesNum].a3
    correctAnswer = quiz[quesNum].ca
    prevQues = quesNum
    
}
async function chooseAnswer(ans){
    if (ans == correctAnswer){
        document.getElementById("questionContainer").style.backgroundColor = 'rgb(' + 0 + ',' + 200 + ',' + 0 + ')'
        await sleep(1000)
        document.getElementById("questionContainer").style.backgroundColor = 'rgb(' + 255 + ',' + 228 + ',' + 196 + ')'
        document.getElementById("score").innerHTML = (score +=1).toString()
    }
    else{
        document.getElementById("questionContainer").style.backgroundColor = 'rgb(' + 200 + ',' + 0 + ',' + 0 + ')'
        await sleep(1000)
        document.getElementById("questionContainer").style.backgroundColor = 'rgb(' + 255 + ',' + 228 + ',' + 196 + ')'
       
    }
    quizGen()
}

quizGen()
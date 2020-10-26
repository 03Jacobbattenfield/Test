function answerright() {
    document.getElementById("demo").innerHTML = "You Got That Hella Right!";
    document.getElementById("correct?").innerHTML = "Correct!";
    document.getElementById("correct?").style.color ="green";
    document.getElementById("a1").style.backgroundColor="green";
    document.getElementById("a2").style.backgroundColor="black";
    document.getElementById("a3").style.backgroundColor="black";
    document.getElementById("a4").style.backgroundColor="black";
}
function answerwrong() {
    document.getElementById("demo").innerHTML = "Sorry That Was Wrong Try Again";
    document.getElementById("correct?").innerHTML = "Wrong!";
    document.getElementById("correct?").style.color ="Red";
    document.getElementById("a2").style.backgroundColor="red";
    document.getElementById("a1").style.backgroundColor="black";
    document.getElementById("a3").style.backgroundColor="black";
    document.getElementById("a4").style.backgroundColor="black";
}
function answerwrong2(){
    document.getElementById("demo").innerHTML = "You Really Need To Brush Up On Your Arithmatic";
    document.getElementById("correct?").innerHTML = "Wrong!";
    document.getElementById("correct?").style.color ="Red";
    document.getElementById("a3").style.backgroundColor="red";
    document.getElementById("a1").style.backgroundColor="black";
    document.getElementById("a2").style.backgroundColor="black";
    document.getElementById("a4").style.backgroundColor="black";

}
function answerwrong3(){
    document.getElementById("demo").innerHTML = "Try Not Sucking At Math";
    document.getElementById("correct?").innerHTML = "Wrong!";
    document.getElementById("correct?").style.color ="Red";
    document.getElementById("a4").style.backgroundColor="red";
    document.getElementById("a2").style.backgroundColor="black";
    document.getElementById("a1").style.backgroundColor="black";
    document.getElementById("a3").style.backgroundColor="black";
}

var element = document.querySelector("button");

var form = document.querySelector("form");

element.addEventListener("click", function(event){

    event.preventDefault();

    var name = form.name.value;
    var lastName = form.last_name.value;
    var Email = form.Email.value;
    var phone = form.phone.value;

    if(name.length > 1){
        document.querySelector("#name_comment_1").innerHTML = "";

        /*form.name.setAttribute("value", "")*/
    }

    else{
        document.querySelector("#name_comment_1").innerHTML = "Udfyld dette felt!";

        //form.name.setAttribute("value", "Udfyld dette felt!")
    }

    if(lastName.length > 1){
        document.querySelector("#name_comment_2").innerHTML = "";

    }

    else{
        document.querySelector("#name_comment_2").innerHTML = "Udfyld dette felt!";

    }

    if(Email.length > 1){
        document.querySelector("#name_comment_3").innerHTML = "";

    }else{
        document.querySelector("#name_comment_3").innerHTML = "Udfyld dette felt!";

    }

    if(phone.length < 8){
        document.querySelector("#name_comment_4").innerHTML = "Udfyld dette felt!";

    }else{
        document.querySelector("#name_comment_4").innerHTML = "";

    }
})

/*
document.querySelectorAll(".input_felter").forEach(inputfelt => {
    inputfelt.addEventListener("keydown", function(event){

        var name = event.target;

        if(name.value.length > 2){

            name.style.backgroundColor = "green";

        }else{

            name.style.backgroundColor = "red";
        }
    })

})
*/

var element = document.querySelector("button");

var form = document.querySelector("form");

element.addEventListener("click", function(event){

    event.preventDefault();

    var name = form.name.value;
    var lastName = form.last_name.value;
    var Email = form.Email.value;
    var phone = form.phone.value;

    if(name.length > 1){
        document.querySelector("#name_comment_1").innerHTML = "";

        /*form.name.setAttribute("value", "")*/
    }

    else{
        document.querySelector("#name_comment_1").innerHTML = "Udfyld dette felt!";

        //form.name.setAttribute("value", "Udfyld dette felt!")
    }

    if(lastName.length > 1){
        document.querySelector("#name_comment_2").innerHTML = "";

    }

    else{
        document.querySelector("#name_comment_2").innerHTML = "Udfyld dette felt!";

    }

    if(Email.length > 1){
        document.querySelector("#name_comment_3").innerHTML = "";

    }else{
        document.querySelector("#name_comment_3").innerHTML = "Udfyld dette felt!";

    }

    if(phone.length < 8){
        document.querySelector("#name_comment_4").innerHTML = "Udfyld dette felt!";

    }else{
        document.querySelector("#name_comment_4").innerHTML = "";

    }
})

/*
document.querySelectorAll(".input_felter").forEach(inputfelt => {
    inputfelt.addEventListener("keydown", function(event){

        var name = event.target;

        if(name.value.length > 2){

            name.style.backgroundColor = "green";

        }else{

            name.style.backgroundColor = "red";
        }
    })

})
*/

const quizQuestions = [
    { //f??rste plads i arrayet, plads 0
        q: "Hvor mange elbiler er der i Danmark?",
        a: ["10327", "32502", "73086", "8314"],
        correct: "32502",
        point: 0
    },
    { // anden plads i arrayet, plads 1
        q: "Hvad betyder samk??rsel?",
        a: ["At to biler k??rer sammen", "At man lejer sin bil ud", "At to eller flere personer k??rer i samme bil", "At man k??rer pirattaxi"],
        correct: "At to eller flere personer k??rer i samme bil",
        point: 0
    },
    { // tredje plads i arrayet, plads 2
        q: "Hvad fokuserer Gate 21 p???",
        a: ["At afskaffe alle benzin- og dieselbiler", "B??redygtighed og gr??n omstilling", "Mindre trafik p?? vejene", "At alle skal k??re i elbil"],
        correct: "B??redygtighed og gr??n omstilling",
        point: 0
    },
    { // fjerde plads i arrayet, plads 3
        q: "Hvor mange %  skal vi reducere CO2-udledningen og andre drivhusgasser med i ??r 2030?",
        a: ["20%", "40%", "60%", "70%"],
        correct: "70%",
        point: 0
    }

];


var count = 0;
var qElement = document.querySelector("#quiz");
var optionsElement = document.querySelector(".options")

function runProgram() {

    qElement.innerHTML = quizQuestions[count].q

    var aElements = "<ul>"

    quizQuestions[count].a.forEach(answer => {
        aElements += '<li>' + answer + '</li><br>'
    })

    optionsElement.innerHTML = aElements + ' <br><input type="submit" value="Svar" id="svar"> </ul>'

    document.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", function (e) {
            removeClickedClass();
            e.target.classList.add("clicked");
        })
    });

    checkAnswer();
}

function removeClickedClass() {

    document.querySelectorAll("li").forEach(li => {

        li.classList.remove("clicked");

    });
}

function getSelectedAnswer() {

    var answer;

    document.querySelectorAll("li").forEach(li => {

        if (li.classList.value == "clicked") {
            answer = li.innerHTML;
        }


    });

    return answer;
}

function checkAnswer() {

    answerElement = document.querySelector("#svar")

    answerElement.addEventListener("click", function (e) {

        e.preventDefault();

        console.log(getSelectedAnswer())

        if (getSelectedAnswer() == quizQuestions[count].correct) {
            quizQuestions[count].point = 1;
        }

        count = count + 1;

        if (quizQuestions.length == count) {
            status();
        } else {
            runProgram();
        }


    })

}

function status() {

    qElement.innerHTML = "Point status"

    optionsElement.innerHTML = "";

    var samletPoint = 0;

    quizQuestions.forEach(answer => {
        samletPoint += answer.point
    })

    optionsElement.innerHTML = "Du fik " + samletPoint + " ud af " + quizQuestions.length + " mulige ";

}



runProgram();

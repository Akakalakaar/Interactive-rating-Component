let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let final = 0
let submit = document.getElementById("button")
let after = document.getElementById("after")
let ratings = document.getElementById("ratings")
let card = document.getElementById("content")



function select1(){
    final = one.textContent
    console.log(final)
    one.style.background = "hsl(25, 97%, 53%)";
    one.style.color="white";
    two.style.background = "hsl(213, 19%, 18%)";
    two.style.color="hsl(217, 12%, 63%)";
    three.style.background = "hsl(213, 19%, 18%)";
    three.style.color="hsl(217, 12%, 63%)";
    four.style.background = "hsl(213, 19%, 18%)";
    four.style.color="hsl(217, 12%, 63%)";
    five.style.background = "hsl(213, 19%, 18%)";
    five.style.color="hsl(217, 12%, 63%)";
}
function select2(){
    final = two.textContent
    console.log(final)
    one.style.background = "hsl(213, 19%, 18%)";
    one.style.color="hsl(217, 12%, 63%)";
    two.style.background = "hsl(25, 97%, 53%)";
    two.style.color="white";
    three.style.background = "hsl(213, 19%, 18%)";
    three.style.color="hsl(217, 12%, 63%)";
    four.style.background = "hsl(213, 19%, 18%)";
    four.style.color="hsl(217, 12%, 63%)";
    five.style.background = "hsl(213, 19%, 18%)";
    five.style.color="hsl(217, 12%, 63%)";
}
function select3(){
    final = three.textContent
    console.log(final)
    one.style.background = "hsl(213, 19%, 18%)";
    one.style.color="hsl(217, 12%, 63%)";
    two.style.background = "hsl(213, 19%, 18%)";
    two.style.color="hsl(217, 12%, 63%)";
    three.style.background = "hsl(25, 97%, 53%)";
    three.style.color="white";
    four.style.background = "hsl(213, 19%, 18%)";
    four.style.color="hsl(217, 12%, 63%)";
    five.style.background = "hsl(213, 19%, 18%)";
    five.style.color="hsl(217, 12%, 63%)";
}
function select4(){
    final = four.textContent
    console.log(final)
    one.style.background = "hsl(213, 19%, 18%)";
    one.style.color="hsl(217, 12%, 63%)";
    two.style.background = "hsl(213, 19%, 18%)";
    two.style.color="hsl(217, 12%, 63%)";
    three.style.background = "hsl(213, 19%, 18%)";
    three.style.color="hsl(217, 12%, 63%)";
    four.style.background = "hsl(25, 97%, 53%)";
    four.style.color="white";
    five.style.background = "hsl(213, 19%, 18%)";
    five.style.color="hsl(217, 12%, 63%)";
}
function select5(){
    final = five.textContent
    console.log(final)
    one.style.background = "hsl(213, 19%, 18%)";
    one.style.color="hsl(217, 12%, 63%)";
    two.style.background = "hsl(213, 19%, 18%)";
    two.style.color="hsl(217, 12%, 63%)";
    three.style.background = "hsl(213, 19%, 18%)";
    three.style.color="hsl(217, 12%, 63%)";
    four.style.background = "hsl(213, 19%, 18%)";
    four.style.color="hsl(217, 12%, 63%)";
    five.style.background = "hsl(25, 97%, 53%)";
    five.style.color="white";
}


function rate(){
    if (final != 0)
    {
        console.log("hey")
    card.style.display="none";
    ratings.textContent = `You selected ${final} out of 5`
    after.style.transition=".8s ease";
    after.style.display="inherit";
    }
    else{
        console.log("first")
        alert("You haven't rated yet .. Please rate")
    }
}

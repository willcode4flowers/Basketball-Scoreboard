
let homeScore = document.getElementById("homeScore"); 
let homePts = 0; 

let guestScore = document.getElementById("guestScore"); 
let guestPts = 0; 



function homeOnePt() {
    homePts = homePts+1; 
    homeScore.textContent = homePts; 
    console.log(homePts); 
}


function homeTwoPts() {
    homePts = homePts+2; 
    homeScore.textContent = homePts; 
    console.log(homePts); 
 }


 function homeThreePts() {
    homePts = homePts+3; 
    homeScore.textContent = homePts; 
    console.log(homePts); 
 }


function reset() {
    homePts = 0; 
    homeScore.textContent = homePts; 
    console.log(homePts); 
}

function guestOnePt() {
    guestPts = guestPts+1; 
    guestScore.textContent = guestPts; 
    console.log(guestPts); 
}


function guestTwoPts() {
    guestPts = guestPts+2; 
    guestScore.textContent = guestPts; 
    console.log(guestPts); 
 }


 function guestThreePts() {
    guestPts = guestPts+3; 
    guestScore.textContent = guestPts; 
    console.log(guestPts); 
 }

 function guestReset () {
    guestPts = 0; 
    guestScore.textContent = guestPts; 
    console.log(guestPts); 
} 
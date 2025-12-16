let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
function homeScorePoints(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}
function guestScorePoints(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}
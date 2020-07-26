


let startTime = new Date();
let clicks = 0;
let bestTime = -1;

document.getElementById("clicker").addEventListener("click", function () {



    let endTime = new Date();
    let elapsedTime = (endTime - startTime) / 1000;
    document.getElementById("elapsedTime").innerText = `Elapsed Time (s): ${elapsedTime}`;
    startTime = endTime;

    if (bestTime < 0) {
        bestTime = elapsedTime;
    } else {
        bestTime = Math.min(bestTime, elapsedTime);
    }

    document.getElementById("bestTime").innerText = `Best Time (s): ${bestTime}`

    clicks++;
    document.getElementById("clicks").innerText = `Click Count: ${clicks}`;



    let top = Math.floor((Math.random() * (window.innerHeight - 200)) + 1)
    let left = Math.floor((Math.random() * (window.innerWidth - 200)) + 1)
    document.getElementById("clicker").style.top = `${top}px`;
    document.getElementById("clicker").style.left = `${left}px`;
    document.getElementById("clicker").style.backgroundColor = getRandomColor();
});

document.getElementById("restart").addEventListener("click", function () {
    let startTime = new Date();
    let clicks = 0;
    let bestTime = "N/A";
    document.getElementById("elapsedTime").innerText = 'Elapsed Time (s): 0';
    document.getElementById("bestTime").innerText = `Best Time (s): ${bestTime}`
    document.getElementById("clicks").innerText = `Click Count: ${clicks}`;

});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

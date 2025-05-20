let currentplayer = "X";
let arr = Array(9).fill(null);
let xWins = 0;
let oWins = 0;
let draws = 0;

// Function to update the display of counters
function updateCounters() {
    // Display the current counts of wins and draws
    document.getElementById("x-wins").innerText = `X Wins: ${xWins}`;
    document.getElementById("o-wins").innerText = `O Wins: ${oWins}`;
    document.getElementById("draws").innerText = `Draws: ${draws}`;
}

function checkwinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        alert(`Winner is ${currentplayer}`);
        if (currentplayer === "X") {
            xWins++;
        } else {
            oWins++;
        }
        updateCounters();
        return;
    }

if (!arr.some(e => e == null)) {
        alert("Draw!");
        return;
    }
}

function handleclick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentplayer;  
    el.innerText = currentplayer;
    if (currentplayer === "X") {
        el.style.color = "black";  
    } else {
        el.style.color = "red";    
    }

    checkwinner();
    currentplayer = currentplayer === "X" ? "O" : "X";
}
function restartGame() {
    // Reset game variables
    currentplayer = "X";
    arr = Array(9).fill(null);

    // Clear the board
    const cells = document.querySelectorAll('.col');
    cells.forEach(cell => {
        cell.innerText = '';
    });
}


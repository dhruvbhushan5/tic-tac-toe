let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");

let msg = document.querySelector(".winner");
let turn0 = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.style.backgroundColor = "#377fd1"
        playsound();
        if (turn0) {

            box.innerHTML = "x"

            turn0 = false;
        } else {

            box.innerHTML = "0"
            turn0 = true;
        }
        box.disabled = true;
        if (checkWinner()) {
        }
    });
});
function playsound() {
    const audio = new Audio("tic tac toe_move.wav");
    audio.play();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;

    }
}

const showwinner = (Winner) => {
    msg.innerText = `Congratulations,Winner is ${Winner}`;
    msg.style.display = "block";
    msg.style.color = "white";
    disableBoxes();
    playwinsound();
   
}
function playwinsound() {
    const audio = new Audio("tic tac toe_win.wav");
    audio.play();
}
const checkWinner = () => {
    let draw = true;

    for (const pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            
            showwinner(pos1val);
            return true;
        }

        if (pos1val === "" || pos2val === "" || pos3val === "") {
            draw = false;
        }
    }
    
    if (draw) {
        msg.innerText = `It is a draw `;
        msg.style.display = "block";
        msg.style.color = "white";
        const audio = new Audio("beep.mp3");
        audio.play();
        return true;
    }

    return false; 
};

resetbtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
        turn0 = true;
        box.style.backgroundColor = "white"
    });
    msg.innerText = ""
    running = true; 

});
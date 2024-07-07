let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

]

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turno){ //player o turn
        box.innerText = 'O';
        box.innerText.style.color = "red"
         turno = false;

        } else{ //player x turn
            box.innerText = "x";
            box.innerText.style.color = "green"
            turno = true;
        }
        box.disabled = true; // for disable button after click
        checkWinner ();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = True;
    }
}
    const enableBoxes = () =>{
        for (let box of boxes){
            box.disabled = True;
            box.innerText = '';
        }

}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");

}

const resetGame = () =>
    {
       turno = true;
       enableBoxes();
       msgContainer.classList.add("hide")
    }

const checkWinner = () =>{
    for ( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val !='' && pos3val !=''){
            if(pos1val ===  pos2val  && pos2val=== pos3val ){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener('click', resetGame)
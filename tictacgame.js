let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let nemGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg_Container");
let msg = document.querySelector("#msg");
let turnO = true;//playerX,playerO

const winPatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){//playerO
    box.innerText = "O";
    turnO = false;
}else{//playerX
    box.innerText = "X";
    turnO = true;
}
    box.disabled = true;

    checkWinner();
    });
});

const showWinner = (winner)=>{
    msg.innerText = `Congratulation,winner is${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(pattern of winPatterns){
     let(pos1Val != "" && pos2Val != "" && pos3Val != "")
     {
        if(posVal === pos2Val&& pos2Val === pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
     } 
    }
}
};

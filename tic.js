let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector("#new-btn");

let turnO = true; //playerX playerO


const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame = () =>{
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.Disabled = true;
        checkwinner();
    });
   
    
});

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner =(winner) => {
    msg.innerText = `Congratulation, the winner is  ${winner}` ;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}

const checkwinner = () => {
    for(pattern of winpatterns){
        
        

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
        if ( pos1val != "" && pos2val != ""&& pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner" , pos1val);
                showwinner(pos1val);
            }
        }
    }
}

newGamebtn.addEventListener("click" , resetgame);
restart.addEventListener("click", resetgame);
// buttons and stuff
const createBtn = document.getElementById('create');
const solveBtn = document.getElementById('solve');
const clearBtn = document.getElementById('clear');
const boardDiv = document.getElementById('board-container');

// board inputs
const inputs = [];

// board (has a default and valid value)
const board = [ [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9] ];

// just creating the board                
function createBoardTemplate(){
    for(let i = 0;i < 81;i++){
        inputs[i] = document.createElement('input');
        inputs[i].classList.add('cell');
        inputs[i].id = `cell-${i}`
        inputs[i].setAttribute('type', 'text');
        inputs[i].setAttribute('maxlength', '1');
        
        boardDiv.appendChild(inputs[i]);
    }
}
createBoardTemplate();

// function for checking the availability
function checkAvailability(row, col){
    // row availability
    for(let i = 0;i < 9; i++){
        if(i !== col && board[row][i] === board[row][col])
            return false;
    }
        
    // column availability
    for(let i = 0;i < 9; i++){
        if(i !== row && board[i][col] === board[row][col])
            return false;
    }

    // cell availability
    let cellRow = Math.floor(row/3)*3;
    let cellCol = Math.floor(col/3)*3;

    for(let i = cellRow; i < cellRow + 3; i++){
        for(let j = cellCol; j < cellCol + 3; j++){
            if((i !== row || j !== col) && board[i][j] === board[row][col])
                return false;
        }
    }

    return true;
}

// checking to see if the board is blank or not
function isBoardBlank(){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== 0)
                return false;
        }
    }
    return true;
}

// creating a new board array
function createNewBoard(){

}

// solve the board
function solve(row, col){
    if(row === 9)
        return true
    else if(col === 9)
        return solve(row+1, 0);
    else if(board[row][col] !== 0)
        return solve(row, col+1);
    else{
        for(let k = 1; k < 10; k++){
            board[row][col] = k;
            
            if(checkAvailability(row, col)){
                console.log(k);
                if(solve(row, col+1))
                    return true
                
            }
        }
        board[row][col] = 0
        return false
    }
}

// writing the board array to the board
function writeBoard(){
    for(let i = 0;i < 81; i++){
        const row = Math.floor(i/9);
        const col = i%9;

        if(board[row][col] !== 0)
            inputs[i].value = board[row][col];
    }
}

//clear buttons event handler
clearBtn.addEventListener('click', () => {
    if(!isBoardBlank()){
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = "");
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++)
                board[i][j] = 0;
        }
    }
    console.log("board cleared")
});

//create buttons event handler
createBtn.addEventListener('click', () => {
    createNewBoard();
    writeBoard();
});

//solve buttons event handler
solveBtn.addEventListener('click', () => {
    if(solve(0, 0))
        writeBoard();
    else
        console.log("There is no answer");
});
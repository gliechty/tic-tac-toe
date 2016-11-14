// set turn at 0, to determine if it's x's or o's turn

// var turnState = function (){
// };

// set message to display who's turn it is


// set click event, to put x or 0 on clicked square, and change square color

xMoves=[];
oMoves=[];
numTurns=0;

var markMove1 = function () {
	if (numTurns%2 === 0) {
		cell1 = document.getElementById("1");
		cell1.style.background = "blue";
		cell1.textContent="X";
		xMoves+=[1];
		numTurns+=1;
	} else {
		cell1 = document.getElementById("1");
		cell1.style.background = "red";
		cell1.textContent="O";
		oMoves+=[1];
		numTurns+=1;
	}
checkWin();
};

var markMove2 = function () {
	if (numTurns%2 === 0) {
		cell2 = document.getElementById("2");
		cell2.style.background = "blue";
		cell2.textContent="X";
		xMoves+=[2];
		numTurns+=1;
	} else {
		cell2 = document.getElementById("2");
		cell2.style.background = "red";
		cell2.textContent="O";
		oMoves+=[2];
		numTurns+=1;
	}
checkWin();
};

var markMove3 = function () {
	if (numTurns%2 === 0) {
		cell3 = document.getElementById("3");
		cell3.style.background = "blue";
		cell3.textContent="X";
		xMoves+=[3];
		numTurns+=1;
	} else {
		cell3 = document.getElementById("3");
		cell3.style.background = "red";
		cell3.textContent="O";
		oMoves+=[3];
		numTurns+=1;
	}
checkWin();
};

var markMove4 = function () {
	if (numTurns%2 === 0) {
		cell4 = document.getElementById("4");
		cell4.style.background= "blue";
		cell4.textContent="X";
		xMoves+=[4];
		numTurns+=1;
	} else {
		cell4 = document.getElementById("4");
		cell4.style.background = "red";
		cell4.textContent="O";
		oMoves+=[4];
		numTurns+=1;
	}
checkWin();
};

var markMove5 = function () {
	if (numTurns%2 === 0) {
		cell5 = document.getElementById("5");
		cell5.style.background= "blue";
		cell5.textContent="X";
		xMoves+=[5];
		numTurns+=1;
	} else {
		cell5 = document.getElementById("5");
		cell5.style.background = "red";
		cell5.textContent="O";
		oMoves+=[5];
		numTurns+=1;
	}
checkWin();
};

var markMove6 = function () {
	if (numTurns%2 === 0) {
		cell6 = document.getElementById("6");
		cell6.style.background= "blue";
		cell6.textContent="X";
		xMoves+=[6];
		numTurns+=1;
	} else {
		cell6 = document.getElementById("6");
		cell6.style.background = "red";
		cell6.textContent="O";
		oMoves+=[6];
		numTurns+=1;
	}
checkWin();
};

var markMove7 = function () {
	if (numTurns%2 === 0) {
		cell7 = document.getElementById("7");
		cell7.style.background= "blue";
		cell7.textContent="X";
		xMoves+=[7];
		numTurns+=1;
	} else {
		cell7 = document.getElementById("7");
		cell7.style.background = "red";
		cell7.textContent="O";
		oMoves+=[7];
		numTurns+=1;
	}
checkWin();
};

var markMove8 = function () {
	if (numTurns%2 === 0) {
		cell8 = document.getElementById("8");
		cell8.style.background= "blue";
		cell8.textContent="X";
		xMoves+=[8];
		numTurns+=1;
	} else {
		cell8 = document.getElementById("8");
		cell8.style.background = "red";
		cell8.textContent="O";
		oMoves+=[8];
		numTurns+=1;
	}
checkWin();
};

var markMove9 = function () {
	if (numTurns%2 === 0) {
		cell9 = document.getElementById("9");
		cell9.style.background= "blue";
		cell9.textContent="X";
		xMoves+=[9];
		numTurns+=1;
	} else {
		cell9 = document.getElementById("9");
		cell9.style.background = "red";
		cell9.textContent="O";
		oMoves+=[9];
		numTurns+=1;
	}
checkWin();
};

var checkWin = function () {
	// console.log("it's getting called");
	// console.log("x moves " + xMoves);
	// console.log("o moves " + oMoves);

	// checks for X win
	if (xMoves.includes(1) && xMoves.includes(2) && xMoves.includes(3)){
		alert("X WINS!!");
	} else if (xMoves.includes(4) && xMoves.includes(5) && xMoves.includes(6)){
		alert("X WINS!!");
	} else if (xMoves.includes(7) && xMoves.includes(8) && xMoves.includes(9)){
		alert("X Wins");
	} else if (xMoves.includes(1) && xMoves.includes(4) && xMoves.includes(7)){
		alert("X Wins");
	} else if (xMoves.includes(2) && xMoves.includes(5) && xMoves.includes(8)){
		alert("X Wins");
	} else if (xMoves.includes(3) && xMoves.includes(6) && xMoves.includes(9)){
		alert("X Wins");
	} else if (xMoves.includes(1) && xMoves.includes(5) && xMoves.includes(9)){
		alert("X Wins");
	} else if (xMoves.includes(3) && xMoves.includes(5) && xMoves.includes(7)){
		alert("X Wins");
		// checks for O win
	} else if (oMoves.includes(1) && oMoves.includes(2) && oMoves.includes(3)){
		alert("O WINS!!");
	} else if (oMoves.includes(4) && oMoves.includes(5) && oMoves.includes(6)){
		alert("O WINS!!");
	} else if (oMoves.includes(7) && oMoves.includes(8) && oMoves.includes(9)){
		alert("O Wins");
	} else if (oMoves.includes(1) && oMoves.includes(4) && oMoves.includes(7)){
		alert("O Wins");
	} else if (oMoves.includes(2) && oMoves.includes(5) && oMoves.includes(8)){
		alert("O Wins");
	} else if (oMoves.includes(3) && oMoves.includes(6) && oMoves.includes(9)){
		alert("O Wins");
	} else if (oMoves.includes(1) && oMoves.includes(5) && oMoves.includes(9)){
		alert("O Wins");
	} else if (oMoves.includes(3) && oMoves.includes(5) && oMoves.includes(7)){
		alert("O Wins");
		// checks for stalemate
	} else {
		if (numTurns == 9) {
			alert("It's a stalemate");
		}
	}
};

// resets the board with a page refresh
var reset = function(){
	location.reload();
};

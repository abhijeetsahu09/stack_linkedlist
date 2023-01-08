const SetColor = function () {
  outputDiv.style.backgroundColor = "#9be15d";
  outputDiv.style.color = "black";
};

const UpdateUI = function (change) {
  displayValue(change);
};

const stack = [];
let TOP = -1;

// const colorTop = function(){
//   for(let i = 0 ; i <= TOP;i++){
//     if(i == TOP){
//       //CSS BLOCK;
//     }else{
//       // NORMAL CSS BLOCK;
//     }
//   }
// }
const displayBtn = document.querySelector(".display-btn");

const outputDiv = document.querySelector(".output");

const stackAdd = document.querySelector(".stack");

const valueINP = document.querySelector(".input-val");

const pushBtn = document.querySelector(".push-btn");

const popBtn = document.querySelector(".pop-btn");

const topBtn = document.querySelector(".top-btn");

const emptyBtn = document.querySelector(".empty-btn");

const displayTop = document.querySelector(".display-top");

const displayNode = document.querySelector(".link-node");

const nodeVal = document.querySelector(".val");

const topVal = document.querySelector(".top-val");

//UPDATE CREATE NODE

const updateNode = function () {
  displayNode.style.opacity = "1";

  nodeVal.textContent = Number(valueINP.value);

  if (TOP === -1) {
    topVal.textContent = "NULL";
  } else {
    topVal.textContent = `${stack[TOP]}`;
  }
};

//PUSH EVENT
pushBtn.addEventListener("click", function () {
  displayTop.textContent = `OUTPUT`;
  displayTop.style.background = "transparent";
  const value = Number(valueINP.value);
  if (TOP === -1) {
    const html = `<div class="stack-row">NULL</div>`;
    stackAdd.insertAdjacentHTML("afterbegin", html);
  }
  stack.push(value);
  updateNode();
  UpdateUI(value);
  TOP++;
});

//PUSHING IN STACK
stackAdd.innerHTML = "";
const displayValue = function (value) {
  const html = `<div class="stack-row">${value}</div>`;
  stackAdd.insertAdjacentHTML("afterbegin", `<div class="link">&darr;</div>`);
  stackAdd.insertAdjacentHTML("afterbegin", html);
};

//TOP EVENT
topBtn.addEventListener("click", function () {
  displayNode.style.opacity = "0";
  SetColor();
  if (TOP === -1) {
    displayTop.textContent = `NO ELEMENT IN STACK!`;
  } else {
    displayTop.textContent = `TOP ELEMENT IN THE \n STACK IS : ${stack[TOP]}`;
  }
});

//EMPTY EVENT
emptyBtn.addEventListener("click", function () {
  displayNode.style.opacity = "0";
  SetColor();

  if (TOP === -1) {
    displayTop.textContent = `THE STACK IS EMPTY!`;
  } else {
    displayTop.textContent = `THE STACK IS NOT EMPTY!`;
  }
});

//DISPLAY EVENT
displayBtn.addEventListener("click", function () {
  displayNode.style.opacity = "0";
  SetColor();
  if (TOP === -1) {
    displayTop.textContent = `NO ELEMENT IN STACK!`;
  } else {
    let str = "";
    for (let i = TOP; i >= 0; i--) {
      str = str + `${stack[i]} `;
    }
    displayTop.textContent = `ELEMENTS OF STACK ARE : ${str}`;
  }
});

// POP IN ACTION
popBtn.addEventListener("click", function () {
  displayNode.style.opacity = "0";
  stackAdd.innerHTML = "";

  if (TOP === -1) {
    displayTop.textContent = `THE STACK IS EMPTY!`;
    SetColor();
    stackAdd.innerHTML = "";
  } else if (TOP === 0) {
    stackAdd.innerHTML = "";
    displayTop.textContent = `${stack[TOP]} Is Popped!`;
    stack.pop();
    TOP--;
  } else {
    const html = `<div class="stack-row">NULL</div>`;

    stackAdd.insertAdjacentHTML("afterbegin", html);

    displayTop.textContent = `${stack[TOP]} Is Popped!`;
    stack.pop();
    TOP--;
    for (let i = 0; i <= TOP; i++) {
      const html = `<div class="stack-row">${stack[i]}</div>`;
      stackAdd.insertAdjacentHTML(
        "afterbegin",
        `<div class="link">&darr;</div>`
      );
      stackAdd.insertAdjacentHTML("afterbegin", html);
    }
  }
});

console.log("hello");



const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let index = 0;
  
  document.body.addEventListener('keydown', (e) => {
    var keyPressed = e.key;
    if (keyPressed === codes[index]){
      index += 1;
      if (index === codes.length){
        alert("Hurray!");
        console.log('worked');
        index = 0;
      }
    }else{
        index = 0;
      }
  })
}

init();
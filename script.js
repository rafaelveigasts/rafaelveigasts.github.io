const darkModeBTN = document.getElementById('dark-mode-icon');
const leftDiv = document.getElementById('left-div');
const rightDiv = document.getElementById('right-div');

darkModeBTN.addEventListener('click', (event)=>{
  event.preventDefault();
  changeBG()
})

function changeBG () {
  if (document.body.children[1].firstElementChild.style.backgroundColor == '#5d4e60') {
    document.body.children[1].firstElementChild.style.backgroundColor == '#7BA1B5'}
  }

// document.body.children[1].firstElementChild.style.backgroundColor = 'white';
const closemenu = document.querySelector('.close-menu');
const openmenu = document.querySelector('.hamburg');

function menubutton() {
  document.getElementById('navigate').classList.toggle('hidden')
}


openmenu.addEventListener('click',menubutton)
closemenu.addEventListener('click',menubutton)

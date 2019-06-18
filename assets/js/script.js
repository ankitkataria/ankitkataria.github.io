const leftPane= document.getElementsByClassName('left-pane')[0];
const container = document.getElementsByClassName('container')[0];
const navList = document.getElementsByClassName('nav-list')[0];
const navListBtn = document.getElementsByClassName('nav-btn')[0];

  	function navOpen(){
  		leftPane.classList.toggle('open');
  		container.classList.toggle('open');
  		navList.classList.toggle('open');
  		navListBtn.classList.toggle('nav-btn--open');
  	}

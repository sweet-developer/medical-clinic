//start craete navbar effect

// let enterNAme = prompt('Hello friend please type your name? ');


// alert(`Hello ${enterNAme} welcome to our website.`)

//get buttons array
let Btns = document.querySelectorAll('.navbar a');
// loop for each button
Btns.forEach(function (btn) {
  //add event listener for each  btn
  btn.addEventListener('click', function () {

    // prevent refresh browser
    // e.preventDefault();

    // delete all active class on btns
    for (let i = 0; i < Btns.length; i++) {
      Btns[i].classList.remove('active');
    }

    //add active on btn clicked
    btn.classList.add('active');
  });

});


//end craete navbar effect


//start create slider
const imageList = document.querySelectorAll('.slider img');

const leftBtn = document.getElementById('left');

const rightBtn = document.getElementById('right');


rightBtn.onclick = nextSlide;
leftBtn.onclick = prevSlide;

let currentSlide = 0;


function nextSlide() {
  // check if img  it is the last img
  if (currentSlide == imageList.length - 1) {
    // return to  first img
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  // remove class activr from all img
  removeAllActive();

  // add class active for  nextimg
  imageList[currentSlide].classList.add('active');


}


function prevSlide() {
  // check if img  it is the first img
  if (currentSlide == 0) {
    // return to  last img
    currentSlide = imageList.length - 1;
  } else {
    currentSlide--;
  }
  // remove class activr from all img
  removeAllActive();
  // add class active for  nextimg
  imageList[currentSlide].classList.add('active');
}

// remove function to remove all  active class
function removeAllActive() {
  //loop through images
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].classList.remove('active');
  }


}


// end create slider
let settingSection = document.getElementById('settings');
let container = document.getElementById('container');
let headern = document.getElementsByTagName('header');

settingSection.style.left = '(window.innerWidth-container.width)/2';
settingSection.style.top = '200px';

// create function  change color wesite

let toggleBtn = document.querySelector('.toggle-settings i');
let settingsContent = document.querySelector('.settings-content');

toggleBtn.onclick = function () {
  //toggle fa-spin for rotation on self
  this.classList.toggle('fa-spin');
  // toggle class active on settings content
  settingsContent.classList.toggle('active');
};


// switch colors

let colorList = document.querySelectorAll('.colors-list li');

colorList.forEach(function (color) {
  color.addEventListener('click', function (e) {

    //remove calss active from boxes

    for (let i = 0; i < colorList.length; i++) {
      colorList[i].classList.remove('active');
    }

    // add active class to  clicked box
    color.classList.add('active');

    //set color on root on all html page element
    document.documentElement.style.setProperty('--color', e.target.dataset.color);

    //set color on local storage 
    localStorage.colorOption = e.target.dataset.color;


  });


});

//get item from local storage 
localStorage.colorOption;
//check if local storage have value or not 
if (localStorage.colorOption !== null) {
  //set color web site from local storage 
  document.documentElement.style.setProperty('--color', localStorage.colorOption);

}

// create popoup

let learnBtn = document.getElementById('learn-more');
let closeBtn = document.getElementById('close');

learnBtn.onclick = createPopup;
closeBtn.onclick = closePopup;
function createPopup() {
  document.getElementById('popup').classList.add('active')
}

function closePopup() {
  document.getElementById('popup').classList.remove('active')
}



//get item from local storage 
localStorage.colorOption;
//check if local storage have value or not 
if (localStorage.colorOption !== null) {
    //set color web site from local storage 
    document.documentElement.style.setProperty('--color', localStorage.colorOption);

}
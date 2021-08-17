'use strict';



const patientAppintmetn = new PaitentAppointment([]);

function gitpatient(){
    
    const appontPatient = JSON.parse(localStorage.getItem('patientAppoint'));
    console.log(appontPatient);

    for(let i = 0;i<appontPatient.length;i++){
        
        console.log(appontPatient[i]);

        patientAppintmetn.addPatientApoint(
            appontPatient[i].firstName,
            appontPatient[i].lastName , 
            appontPatient[i].services , 
            appontPatient[i].phone ,
            appontPatient[i].appointmentDate ,
            appontPatient[i].appointmentTime ,
            appontPatient[i].description
            );

            
    }
    console.log(patientAppintmetn.patients);

}



/* patientAppintmetn.removePatientApoint(patientAppintmetn.patients[2]);
console.log(patientAppintmetn.patients);
patientAppintmetn.saveTolocalStorage();  */
 
function render(){
gitpatient();
DrowTable();

 }

 localStorage.colorOption;
//check if local storage have value or not 
if (localStorage.colorOption !== null) {
  //set color web site from local storage 
  document.documentElement.style.setProperty('--color', localStorage.colorOption);

}


//dorw table
  function DrowTable ()
 {
    let tableBody = document.querySelector("tbody");

    patientAppintmetn1.patients

    
    for(let i=0;i<patientAppintmetn.patients.length;i++)
    {
      
      let trElement = document.createElement('tr');
       
          
  
         let tdElement2 = document.createElement('td');
        tdElement2.textContent=patientAppintmetn.patients[i].firstName +" "+patientAppintmetn.patients[i].lastName;
         trElement.appendChild(tdElement2);
  
         /* let tdElement3 = document.createElement('td');
        tdElement3.textContent=;
         trElement.appendChild(tdElement3);
 */
         let tdElement4 = document.createElement('td');
        tdElement4.textContent=patientAppintmetn.patients[i].phone;
         trElement.appendChild(tdElement4);

         let tdElement5 = document.createElement('td');
        tdElement5.textContent=patientAppintmetn.patients[i].appointmentDate;
         trElement.appendChild(tdElement5);
         
         let tdElement6 = document.createElement('td');
        tdElement6.textContent=patientAppintmetn.patients[i].appointmentTime;
         trElement.appendChild(tdElement6);

         let tdElement1 = document.createElement('td');
           tdElement1.textContent='Delete';
          tdElement1.setAttribute('id', patientAppintmetn.patients[i].firstName);
          tdElement1.setAttribute("style", "color:  red;");
          tdElement1.setAttribute("style", "cursor: pointer;"); 
          tdElement1.addEventListener('click', removePationet);
          trElement.appendChild(tdElement1);
  
  
         tableBody.appendChild(trElement);
 }
} 

//clear All table Rows
function ClearTable (){
    let tableBody = document.querySelector("tbody");
    while(tableBody.hasChildNodes()){

        tableBody.removeChild(tableBody.firstChild);
    }
}

// remove Pationt 
function removePationet(event)
{  event.preventDefault();
    let specificPatient = event.target.id
    console.log(event.target.id);
    for (let i = 0 ;i<patientAppintmetn.patients.length; i++)
   {
       if(patientAppintmetn.patients[i].firstName == specificPatient)
       {
           console.log(patientAppintmetn.patients[i]);
           patientAppintmetn.removePatientApoint(i);
       }
   }

   console.log(patientAppintmetn.patients); 
  
  localStorage.setItem('patientAppoint',JSON.stringify(patientAppintmetn.patients));
  location.reload();

    

}




let gitButton1 =  document.getElementById("allButton");
gitButton1.addEventListener('click',AllAppointment);


//Button to view all the appoinmetns 
function AllAppointment(){

    gitButton1.setAttribute("style", "visibility: hidden;");
    let gitappontPatient = JSON.parse(localStorage.getItem('patientAppoint'));
     let tableBody = document.querySelector("tbody");
     ClearTable();

     for (let i = 0 ; i< gitappontPatient.length ;i++)
    {
        
         let trElement = document.createElement('tr');
       
          
    
         let tdElement2 = document.createElement('td');
         tdElement2.textContent=gitappontPatient[i].firstName +" "+gitappontPatient[i].lastName;
         trElement.appendChild(tdElement2);
  
         /* let tdElement3 = document.createElement('td');
        tdElement3.textContent=;
         trElement.appendChild(tdElement3);
 */
         let tdElement4 = document.createElement('td');
         tdElement4.textContent=gitappontPatient[i].phone;
         trElement.appendChild(tdElement4);

         let tdElement5 = document.createElement('td');
         tdElement5.textContent=gitappontPatient[i].appointmentDate;
         trElement.appendChild(tdElement5);
         
         let tdElement6 = document.createElement('td');
         tdElement6.textContent=gitappontPatient[i].appointmentTime;
         trElement.appendChild(tdElement6);

         let tdElement1 = document.createElement('td');
           tdElement1.textContent='Delete';
          tdElement1.setAttribute('id', gitappontPatient[i].firstName);
          tdElement1.setAttribute("style", "color:  red;");
          tdElement1.setAttribute("style", "cursor: pointer;"); 
          tdElement1.addEventListener('click', removePationet);
          trElement.appendChild(tdElement1);
        
          


         tableBody.appendChild(trElement);

           
        

    }


}

let todayCounter = 0 ;
let gitButton =  document.getElementById("todayButton");
gitButton.addEventListener('click',TodayAppointment);

// functions to view Today Appointments 
function TodayAppointment(){
    

    
    let gitappontPatient = JSON.parse(localStorage.getItem('patientAppoint'));
     // currentDat For Today Date 
        let currentDate = new Date();
        let dd = String(currentDate.getDate()).padStart(2, '0');
        let mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = currentDate.getFullYear();

        currentDate =yyyy  + '-' + mm + '-' + dd;
     console.log(currentDate);
     let x=gitappontPatient[1].appointmentDate;
     console.log(x)



     let tableBody = document.querySelector("tbody");
     ClearTable();

     for (let i = 0 ; i< gitappontPatient.length ;i++)
    {
        if (gitappontPatient[i].appointmentDate == currentDate)
        {
         let trElement = document.createElement('tr');
         let tdElement2 = document.createElement('td');
         tdElement2.textContent=gitappontPatient[i].firstName +" "+gitappontPatient[i].lastName;
         trElement.appendChild(tdElement2);
  
         /* let tdElement3 = document.createElement('td');
        tdElement3.textContent=;
         trElement.appendChild(tdElement3);
 */
         let tdElement4 = document.createElement('td');
         tdElement4.textContent=gitappontPatient[i].phone;
         trElement.appendChild(tdElement4);

         let tdElement5 = document.createElement('td');
         tdElement5.textContent=gitappontPatient[i].appointmentDate;
         trElement.appendChild(tdElement5);
         
         let tdElement6 = document.createElement('td');
         tdElement6.textContent=gitappontPatient[i].appointmentTime;
         trElement.appendChild(tdElement6);
         

         let tdElement1 = document.createElement('td');
           tdElement1.textContent='Delete';
          tdElement1.setAttribute('id', gitappontPatient[i].firstName);
          tdElement1.setAttribute("style", "color:  red;");
          tdElement1.setAttribute("style", "cursor: pointer;"); 
          tdElement1.addEventListener('click', removePationet);
          trElement.appendChild(tdElement1);
          
          tableBody.appendChild(trElement);
          
          todayCounter ++;
           
        }

    }

    gitButton1.setAttribute("style", "visibility: visible;");


}


function gitdate(){
    let gitElement1 = document.getElementById('DateT');
let gitElement2 = document.getElementById('DateT1');


    let currentDate = new Date();
        let dd = String(currentDate.getDate()).padStart(2, '0');
        let mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = currentDate.getFullYear();

        currentDate =yyyy  + '-' + mm + '-' + dd;
        gitElement1.innerHTML= currentDate;
        gitElement2.innerHTML= currentDate;

}
gitdate();

render();
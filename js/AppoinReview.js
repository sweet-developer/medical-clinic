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



  function DrowTable ()
 {
    let tableBody = document.querySelector("tbody");

    patientAppintmetn1.patients

    
    for(let i=0;i<patientAppintmetn.patients.length;i++)
    {
      
      let trElement = document.createElement('tr');
       
          let tdElement1 = document.createElement('td');
           tdElement1.textContent='Delete';
          tdElement1.setAttribute('id', patientAppintmetn.patients[i].firstName);
          tdElement1.setAttribute("style", "color:  red;");
          tdElement1.setAttribute("style", "cursor: pointer;"); 
          tdElement1.addEventListener('click', removePationet);
          trElement.appendChild(tdElement1);
  
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
  
  
         tableBody.appendChild(trElement);
 }
} 


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

render();
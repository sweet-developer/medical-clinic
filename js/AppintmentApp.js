"use strict";



function PaitentAppointment(patients=[]){
    this.patients = patients;
}

PaitentAppointment.prototype.addPatientApoint  = function(firstName ,lastName , services , phone ,appointmentDate ,appointmentTime ,description){

    let newPatient = new Patient(firstName ,lastName , services , phone ,appointmentDate ,appointmentTime ,description);
    this.patients.push(newPatient);
    
}

PaitentAppointment.prototype.saveTolocalStorage = function(){
    
    
    if(localStorage.getItem('patientAppoint') == null){
        localStorage.setItem('patientAppoint',JSON.stringify(this.patients));
    } else{
      //git the old data 
         
      
      let old_data = JSON.parse(localStorage.getItem('patientAppoint')|| []);
     console.log(old_data);
     old_data.push(this.patients[this.patients.length - 1]);
       
       console.log(old_data);

      // push new data with old data  
      // save the data  
      localStorage.setItem('patientAppoint',JSON.stringify(old_data)); 
      
      
    }   
}

PaitentAppointment.prototype.removePatientApoint = function (patientIndex) {
      
      if(patientIndex != -1)
      {
      console.log(patientIndex);
    this.patients.splice(patientIndex,1);
    console.log(this.patients);
      }
}


function Patient(firstName,lastName,services='',phone,appointmentDate,appointmentTime,description=''){
    this.firstName = firstName;
     this.lastName = lastName;
     this.services=services;
     this.phone = phone;
     this.appointmentDate= appointmentDate;
     this.appointmentTime = appointmentTime;
     this.description=description;
 
} 


let patientAppintmetn1 = new PaitentAppointment([]);


let AppointmentForm = document.getElementById('AppointmentForm');
AppointmentForm.addEventListener('submit',MakeApointment);

function MakeApointment(e)
{   e.preventDefault();
   let firstName = e.target.firstName.value;
   let lastName = e.target.lastName.value;
   let services = e.target.services.value;
   let phone = e.target.phone.value;
   let appointmentDate = e.target.idDate.value;
   let appointmentTime = e.target.idTime.value;
   let description = e.target.idTextarea.value;
   
   patientAppintmetn1.addPatientApoint(firstName ,lastName , services , phone ,appointmentDate ,appointmentTime ,description);
   
   console.log(patientAppintmetn1.patients);
   
   patientAppintmetn1.saveTolocalStorage();
   window.location.href='./AppintReview.html';



}



localStorage.colorOption;
//check if local storage have value or not 
if (localStorage.colorOption !== null) {
  //set color web site from local storage 
  document.documentElement.style.setProperty('--color', localStorage.colorOption);

}


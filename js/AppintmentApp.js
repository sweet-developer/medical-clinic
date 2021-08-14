"use strict";

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("strong1",0 ,9, 1000);
animateValue("strong2",0 ,1500, 1000);
animateValue("strong3",0 ,5, 1000);
animateValue("strong4",0 ,30, 1000);



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
   let patient = new Patient(firstName,lastName,services,phone,appointmentDate,appointmentTime,description)
      // test
      console.log(patient);
      console.log(patient.firstName);        
   /* console.log(firstName);
   console.log(lastName);
   console.log(services);
   console.log(phone);
   console.log(appointmentDate);
   console.log(appointmentTime);
   console.log(description); */

localStorage.AppointmentForm=JSON.stringify(patient);
   let x= JSON.parse(localStorage.AppointmentForm);

   

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



//test 

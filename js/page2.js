'use strict';

//=====================================================(array declaration)=========================================
const diseaseName = ['Flu', 'Insomnia', 'Smallpox', 'Measles', 'COVID-19', 'Spring Allergy', 'Diarrhea', 'Hookworm', 'Leprosy', 'pertussis'];
const description=['It is a viral infection of the nose and throat.',
  'is difficulty getting to sleep or staying asleep for long enough to feel refreshed the next morning. you can use some medical treatment. note: make sure to did not take it unless your doctor said.',
  'is a contagious virus that appears in the form of pimples, blisters, and small scars scattered on the skin of an infected person',
  'is a viral respiratory disease that can have life-threatening complications, and mostly affects children.',
  'severe acute respiratory syndrome virus',
  'The body'+'s reaction when exposed to an external or intrusive substance and it is pollen',
  ' is characterized by loose, watery stools or a frequent need to have a bowel movement.you should drink at least 1.5 litter from clean water. also you can use some medical therapy',
  'is an intestinal parasite of humans.',
  'is a contagious skin disease that appears in the form of severe skin ulcers that escalate to cause nerve damage in the arms, legs and skin areas around the body, as well as muscle weakness.',
  'It is a severe respiratory infection characterized by severe coughing fits accompanied by difficulty in breathing and wheezing in the chest'];
const img=['flu.jpg','insomnia.jpg','smallpox.jpg','measles.jpg','covid.jpg','spring.jpg','diarrhea.jpg','hookworm.jpg','leprosy.jpg','pertussis.jpg'];

// flu disease symptoms and treatment
const fluSymptom = ['Fever or feeling feverish/having chills.',
  'Cough.',
  'Shortness of breath or difficulty breathing.',
  'tiredness.',
  'Sore throat.',
  'Runny or stuffy nose.',
  'Muscle pain or body aches.',
  'Headache.'];
const fluTreatment = ['Be sure to drink large amounts of water, drink useful hot drinks, and take a rest.',
  'auxiliary medicines such as: paracetamol, Aspirin (for those above 18 years old and dont have allergy from it ) and Ipratropium.'];

// insomnia disease symptoms and treatment
const insomniaSymptom = ['find it hard to go to sleep.',
  'wake up several times during the night.',
  'lie awake at night.',
  'wake up early and cannot go back to sleep.',
  'still feel tired after waking up.',
  'find it hard to nap during the day even though you are tired.',
  'feel tired and irritable during the day.'];
const insomniaTreatment=['Benzodiazepine.','Zolpidem.'];


// smallpox disease symptoms and treatment
const smallpoxSymptom=['a high fever.','fatigue.','a headache.','a backache.',
  'After 2 to 3 days of illness, a flat, red rash appears.',
  'Over the next 2 to 3 weeks, the flat, red spots become firm and dome-shaped and fill with pus.'];
const smallpoxTreatment=['take the smallpox vaccine and avoid the use of aspirin for children and replace it with some painkillers containing ibuprofen.'];


// measles disease symptoms and treatment
const measlesSymptoms=['a runny or blocked nose.','sneezing.','watery eyes.','swollen eyelids.',
  'sore, red eyes that may be sensitive to light.',
  'fever, which may reach around 40C.',
  'small greyish-white spots in the mouth.',
  'aches and pains.'];
const measlesTreatment=['measles vaccine. '];


// covid-19 disease symptoms and treatment
const covidSymptom=['Fever or chills.','Cough.','Shortness of breath or difficulty breathing.',
  'Fatigue.','Muscle or body aches.','Headache.','New loss of taste or smell.',
  'Sore throat.',' Congestion or runny nose.','Nausea or vomiting.','Diarrhea.'];
const covidTreatment=['Pfizer vaccines.','AstraZeneca vaccines.','Sinopharm vaccines.'];

// sprin allergy symptoms and treatment
const springSymptom=['Runny nose.','Watery eyes.','Sneezing.','Coughing.','Itchy eyes and nose.','Dark circles under the eyes.'];
const springTreatment=['The treatment lies in the removal of dust and dirt, and there are some cases that require the use of some medicines.',
  'Antihistamines and you can use it without doctor'+'s prescription because It is intended to relieve the symptoms of allergy attacks.'];

// diarrhea symptoms and treatment
const diarrheaSymptom=['nausea.','abdominal pain.','cramping.','bloating.','dehydration.','a fever.','bloody stools.',
  'a frequent urge to evacuate your bowels.','a large volume of stools.'];
const diarrheaTreatment=['Pepto Bismol.','Imodium A - D.'];


// hookworm symptoms and treatment
const hookwormSymptom=['Itching.','localized rash.',
  'A person with a heavy infection may experience abdominal pain, diarrhea, loss of appetite, weight loss, fatigue and anemia.'];
const hookwormTreatment=['Anthelminthic medications such as albendazole and mebendazole.'];

// leprosy symptoms and treatment
const leprosySymptom=['Loss of feeling in the arms and legs.','muscle weakness.'];
const leprosyTreatment=['Antibiotics are used first to treat infection such as : Dapsone and Rifampin.',
  'Nerve damage is irreversible in the long term, but anti-inflammatory drugs (Prednisone) are used to control the pain and damage caused by leprosy.',
  'Thalidomide is sometimes given, which is an effective drug that suppresses the immune system, which helps in the treatment of lepromatous skin nodules, but this drug leads to severe congenital malformations of the fetus, so it is not given to pregnant women.'];

// pertussis symptoms and treatment
const pertussisSymptom=['Early symptoms can last for 1 to 2 weeks and usually include:Runny nose, Low-grade fever, Mild, occasional cough, Apnea – a pause in breathing (in babies).',
  'After 1 to 2 weeks symptoms include: rapid coughs followed by a high-pitched “whoop” sound, throwing up during or after coughing fits, Exhaustion after coughing fits.'];
const pertussisTreatment=['Young children/ babys are admitted to hospital for treatment because it is dangerous for them.',
  'Treating older children and adults at home by Get plenty of rest, Drink plenty of fluids to avoid dehydration, Divide meals into smaller meals to avoid vomiting after coughing, Ensure that the air in the house is cleaned of coughing irritants, Covering the mouth while sneezing and coughing, in addition to washing hands frequently to avoid spreading the infection to others.',
  'you can use the Antibiotics for older childern and adults.'];

//===================================================(variable declaration)===============================

let select=document.getElementById('diseases'); //to select 'select tag' that hold the list
let option; // 'option tag' that hold the name of diseases
let mainArticle=document.getElementById('informationArticle'); //to select the article which hold the content
let symptomDiv=document.getElementById('symptoms'); // select symptoms div that hold symptoms section
let treatmentDiv=document.getElementById('treatment'); // select treatment div that hold treatment section

let object=[]; // array to contain the objects whicj are the diseases
let totalSymptom=[8,7,6,8,11,6,9,3,2,2]; // array contains the total number of symptoms for each disease
let totalTreatment=[2,2,1,1,3,1,2,1,3,3]; //array contains the total number of treatment for each disease

//================================================(constructor declaration)==============================

function Disease(name, description){
  this.name=name;
  this .description=description;
  this.symptoms=[];
  this.treatment=[];
  object.push(this);
}
//=======================================(create a new object depends on number of diseases)============================

for(let i=0; i<diseaseName.length;i++){
  new Disease (diseaseName[i],description[i]);
}
//===============================(calling)=============================================================================

pushName();

//=================================(push name of diseases to the list)=============================================
function pushName(){
  for(let i=0; i<diseaseName.length;i++){
    option=document.createElement('option');
    option.textContent=diseaseName[i];
    console.log(diseaseName[i]);
    select.appendChild(option);
  }
}
//==================================(eventlistener)================================================================

let button=document.getElementById('button');
//console.log(button);
button.addEventListener('click',eventHandler);
function eventHandler(event){
  //console.log(event);
  event.preventDefault();
  var text = select.options[select.selectedIndex].text;

  clear();
  render(text);
}
//==================================(clear function to clear the page after render)=============================

function clear(){

  while(mainArticle.firstChild)
    mainArticle.removeChild(mainArticle.firstChild);

  while(symptomDiv.firstChild)
    symptomDiv.removeChild(symptomDiv.firstChild);

  while(treatmentDiv.firstChild)
    treatmentDiv.removeChild(treatmentDiv.firstChild);
}
//===========================================(render function to push disease information to the body of page)===========

function render(text){

  for(let i=0; i<diseaseName.length;i++){
    if(i===0 && text === diseaseName[i]){ // to push to flu disease its symptoms and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);

      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(fluSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(fluTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===1 && text===diseaseName[i]){ // to push to insomnia disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(insomniaSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(insomniaTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===2 && text===diseaseName[i]){ // to push to smallpox disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(smallpoxSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(smallpoxTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===3 && text===diseaseName[i]){ // to push to measles disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(measlesSymptoms[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(measlesTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===4 && text===diseaseName[i]){ // to push to covid-19 disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(covidSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(covidTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===5 && text===diseaseName[i]){ // to push to spring allergy its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(springSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(springTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===6 && text===diseaseName[i]){ // to push to diarrhea disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(diarrheaSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(diarrheaTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===7 && text===diseaseName[i]){ // to push to hookworm disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(hookwormSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(hookwormTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===8 && text===diseaseName[i]){ // to push to leprosy disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(leprosySymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(leprosyTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
    //============================================

    if(i===9 && text===diseaseName[i]) { // to push to leprosy disease its symptoms and its treatment and view it in an un-orderlsit
      console.log(text);
      let h3Element=document.createElement('h3');
      h3Element.textContent=object[i].name;
      mainArticle.appendChild(h3Element);
      let pElement=document.createElement('p');
      pElement.textContent=object[i].description;
      mainArticle.appendChild(pElement);

      mainArticle.appendChild(symptomDiv);
      mainArticle.appendChild(treatmentDiv);
      let h4Element=document.createElement('h4');
      h4Element.textContent='Symptoms';
      symptomDiv.appendChild(h4Element);
      let ulElement=document.createElement('ul');
      symptomDiv.appendChild(ulElement);
      for(let j=0;j<totalSymptom[i];j++){
        object[i].symptoms.push(pertussisSymptom[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].symptoms[j];
        //console.log(object[i].symptoms);
        ulElement.appendChild(liElement);
      }
      let h4Element2=document.createElement('h4');
      h4Element2.textContent='Treatment';
      treatmentDiv.appendChild(h4Element2);
      let ulElement2=document.createElement('ul');
      treatmentDiv.appendChild(ulElement2);
      for(let j=0;j<totalTreatment[i];j++){
        object[i].treatment.push(pertussisTreatment[j].split('.'));
        let liElement=document.createElement('li');
        liElement.textContent=object[i].treatment[j];
        //console.log(object[i].treatment);
        ulElement2.appendChild(liElement);
      }
      break;
    }
  }
}




localStorage.colorOption;
//check if local storage have value or not 
if (localStorage.colorOption !== null) {
    //set color web site from local storage 
    document.documentElement.style.setProperty('--color', localStorage.colorOption);


}
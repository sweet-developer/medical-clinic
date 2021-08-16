'use strict';

let count = 0
// The form have localstorage
const form = new Form(JSON.parse(localStorage.getItem('form')) || []);
console.log(form)
let Contents_form = document.getElementById('formContents');

// that function fill the value of product and the messages in contact page
function populateForm() {

    const selectElement = document.getElementById('items');
    for (let i in Product.allProducts) {
        let optionItem = document.createElement('option');
        selectElement.appendChild(optionItem);
        optionItem.textContent = Product.allProducts[i].name;
    }
        for (let i = 0; i< 8;i++){
        let li_1 = document.createElement('li');
        li_1.innerHTML = `The Name ${form.items[i].fname}
                          The Email ${form.items[i].email}
                          The Location ${form.items[i].Location}
                          The enquiry ${form.items[i].items}`;
        Contents_form.appendChild(li_1);
        count ++
        }
}

let item = []
// when submit we have to get the value
function handleSubmit(event) {
    // TODO: Prevent the page from reloading
    event.preventDefault();
    // Do all the things ...

    item = [event.target.fname.value, event.target.email.value,
            event.target.Location.value, event.target.phone.value,
            event.target.history.value,event.target.items.value,
            event.target.Message.value
        
        ]
// Call this function
    addSelectedItemToForm();
    console.log(form)
    form.saveToLocalStorage();
    console.log(localStorage.form)
    updateCounter();
    updateFormPreview();
    catalog.reset();


}

function addSelectedItemToForm() {
  form.addItem(item[0],item[1],item[2],item[3],item[4],item[5],item[6])


}
let counter;
function updateCounter() {
    counter = document.getElementById('itemCount');
    counter.textContent = count+1;
}

function updateFormPreview() {
    
    let li = document.createElement('li');
    li.innerHTML = `your name ${item[0]} and your email  ${item[1]}
                    your Location ${item[2]} and your phone  ${item[3]}
                    your history ${item[4]} and your Reason  ${item[5]}
                    your Message ${item[6]}
                    `;
    Contents_form.appendChild(li);
    count ++
}

const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();

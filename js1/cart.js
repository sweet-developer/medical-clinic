/* global Form */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFrom method is invoked.
const table = document.getElementById('form');
table.addEventListener('click', remove_Item);
let form;
let tbody = document.querySelector('tbody')
let c;
function loadForm() {
  const form_Item = JSON.parse(localStorage.getItem('form')) || [];
  form = new Form(form_Item);
  console.log(form)
}

// Make magic happen --- re-pull the Form, clear out the screen and re-draw it
function renderForm() {
  loadForm();
  clearForm();
  showForm();
}

// TODO: Remove all of the rows (tr) in the Form table (tbody)
function clearForm() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
let formArr = []
// TODO: Fill in the <tr>'s under the <tbody> for each item in the Form
function showForm() {

  for (let j = 0; j < form.items.length; j++) {

    let tr = document.createElement('tr')
    tr.id = "row" + j
    tbody.appendChild(tr)

    let td = document.createElement('td')
    td.textContent = `Delete Message`;
    td.id = "delete" + j
    tr.appendChild(td)
    formArr.push(td.id)

    // let edit = document.createElement('td');
    // edit.textContent = 'Edit'
    // edit.id = 'edit' + j
    // tr.appendChild(edit)
    // formArr.push(edit.id)

    let td1 = document.createElement('td')
    td1.textContent = form.items[j].fname

    tr.appendChild(td1)
    let td2 = document.createElement('td')
    td2.textContent = form.items[j].email
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.textContent = form.items[j].phone
    tr.appendChild(td3)


    let td4 = document.createElement('td')
    td4.textContent = form.items[j].items
    tr.appendChild(td4)

    let td5 = document.createElement('td')
    td5.textContent = form.items[j].Message
    tr.appendChild(td5)
  }
}


function remove_Item(event) {
  console.log(c)

  console.log(event.target.id)


  if (formArr.includes(event.target.id)) {
    let i = formArr.indexOf(event.target.id)
    formArr.splice(i, 1)
    table.deleteRow(i + 1)
    console.log(formArr)
    form.removeItem(i)
    form.saveToLocalStorage()

  }
}


let search = document.getElementById('search');
let show_result = document.getElementById('show_result');

show_result.addEventListener('click', chartResult)
function chartResult() {

  let count = 0;

  for (let i = 0; i < form.items.length; i++) {
    do {
      count++;
    }
   
    while (search === form.items[i].fname) {

      let tr = document.createElement('tr')
      tr.id = "row" + i
      tr.className = "search";
      tbody.appendChild(tr)

      let td = document.createElement('td')
      td.textContent = `Result Of search`;
      tr.appendChild(td)
      formArr.push(td.id)

      let tede = document.createElement('td')
      tede.textContent = form.items[i].fname
      tr.appendChild(tede)

      let tede1 = document.createElement('td')
      tede1.textContent = form.items[i].email
      tr.appendChild(tede1)

      let tede2 = document.createElement('td')
      tede2.textContent = form.items[i].phone
      tr.appendChild(tede2)

      let tede3 = document.createElement('td')
      tede3.textContent = form.items[i].items
      tr.appendChild(tede3)

      let tede4 = document.createElement('td')
      tede4.textContent = form.items[i].Message
      tr.appendChild(tede4)

    }
    

    // console.log(name_array);
  }
}


renderForm();

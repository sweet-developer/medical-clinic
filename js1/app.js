'use strict';

// Form constructor.
const Form = function(items) {
  this.items = items;
};
  // Fill in this instance method to create a new FormItem and add it to this.items
  Form.prototype.addItem = function(fname, email, Location, phone, history, items, Message) {
  let formItemObj   = new FormItem(fname, email,Location, phone, history, items, Message);
  this.items.push(formItemObj);
};

Form.prototype.saveToLocalStorage = function() {
  // Fill in this instance method to save the Message of the form to localStorage
  localStorage.form = JSON.stringify(this.items);
};
// Protoype to remove message from the form
Form.prototype.removeItem = function(item) {
  this.items.splice(item, 1);
};
// formItem value and push it 
const FormItem = function(fname, email,Location, phone, history, items, Message) {
  this.fname = fname;
  this.email = email;
  this.Location = Location;
  this.phone = phone;
  this.history = history;
  this.items = items;
  this.Message = Message;
  FormItem.allitem.push(this)
};
FormItem.allitem =[]
// Product contructor It's the Result of send of message.
const Product = function(name) {
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('Inquiry Message');
  new Product('Appointment Booking');
  new Product('View the disease condition');
  new Product('Question');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
console.log(Product.allProducts);
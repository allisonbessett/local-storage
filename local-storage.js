/*jslint browser: true*/
/*global $, jQuery, alert*/


//TODO: Use localStorage to store data. 
//TODO: Create JSON of array of objects
//TODO: Read data from localStorage at start-up. 
//TODO: Save to it whenever data changes. 
//TODO: Add Edit/Delete button functionality


//on add item click, show form, hide table

$('document').ready(function () {
  var bookTable = $('#bookTable'), bookForm = $('#bookForm'), e = event;
  
//  bookForm.hide();
  
  $('#addItemButton').on('click', function (e) {
    bookForm.show();
    bookTable.hide();
  });
});
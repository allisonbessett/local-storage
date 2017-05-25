/*jslint browser: true*/
/*global $, jQuery, alert*/


//TODO: Save to it whenever data changes. 
//TODO: Add Edit/Delete button functionality




$('document').ready(function () {
  var bookTable = $('#bookTable'), bookForm = $('#bookForm'), e = event, arr = [], book = $('#book'), author = $('#author'), count = 0;
  
//  bookForm.hide();
  
  $('#addItemButton').on('click', function (e) {
    bookForm.show();
    bookTable.hide();
  });
  function updateArray(book, author) {
    arr.push({tBook: book, tAuthor: author});
    console.log("working");
  }
  function updateTable() {
    $('#bookTable tbody').html('<tr></tr>');
    for (var i = 0; i < arr.length; i++) {
    $('#bookTable tBody').append('<tr><td>' + arr[i].tBook + '</td>' + '<td>' + arr[i].tAuthor + '</td>' + '<td>' + "<button type = 'button' id='edit_button'>Edit</button>" + '</td>' + '<td>' + "<button type='button' id = 'delete_button'>Delete</button>" + '</td>' + '</tr>'); 
    count++;
    }
    localStorage.setItem("arr", JSON.stringify(arr));
    
  }
  
  $('#submit').on('click', function (e) {
    e.preventDefault();
    updateArray(book.val(), author.val());
    updateTable();
    bookTable.show();
    bookForm.hide();
    
    //call save settings function
  });
  
});
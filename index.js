console.log("anar book");
// // constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// // display constructor
function Display() {}

// // add methods to display prototype

// // implement the add function
Display.prototype.add = function (book) {
  console.log("adding to ui");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += uiString;
};

// // implement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// // implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length<3 || book.author.length<3){
        return false
    }
    else{
        return true
    }
};

// // implement the show succes or error function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(() => {
        message.innerHTML = ''
    }, 2000);
};

// // add submit event listener libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("submited");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programing = document.getElementById("programing");
  let novels = document.getElementById("novels");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programing.checked) {
    type = programing.value;
  } else if (novels.checked) {
    type = novels.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  
  let display = new Display();
  if(display.validate(book)){
      display.add(book);
      display.clear();
      display.show('success', 'Your book hass been successfully added')

  }
  else{
      // // show error to the user
      display.show('danger', 'Sorry you cannot add this book');
  }
  e.preventDefault();
}

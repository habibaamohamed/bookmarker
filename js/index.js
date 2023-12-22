var bookmarkName= document.getElementById("bookmarkName");
var bookmarkURL= document.getElementById("bookmarkURL");
var books= []

if (localStorage.getItem("books") != null) {
    products = JSON.parse(localStorage.getItem("books"))
    displayProducts();
} else {
    books = []
}
function submit( ) {
    var book = {
        site: bookmarkName.value,
        vist: bookmarkURL.value,
        
    }

    books.push(book)
    display();
    clearForm()

    localStorage.setItem("books", JSON.stringify(book))
}
function display() {
    var trs = ""

    for (var i = 0; i < books.length; i++) {
        trs += ` <tr>
        <td>${i}</td>
        <td>${books[i].site}</td>
        <td>
          <button onclick="visit(${i})" class="btn btn-outline-danger">visit</button>
        </td>
        <td>
          <button onclick="deletet(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`
    }
    document.getElementById("tableContent").innerHTML = trs
}

function clearForm() {
     bookmarkName.value=""
     bookmarkURL.value=""
}
function deletet(index) {
    books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(books))
    display()
}
function visit(index){
    window.location.href=bookmarkURL.value
}

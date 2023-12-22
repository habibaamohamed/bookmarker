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
        <td>${books[i].vist}</td>
          <button onclick= class="btn btn-outline-warning">vist</button>
        </td>
        <td>
          <button onclick="deletet(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`
    }
    document.getElementById("tableContent").innerHTML = trs
}

function clearForm() {
    var bookname= "";
    var bookurl= "";
}
function deletet(index) {
    books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(book))
    display()
}
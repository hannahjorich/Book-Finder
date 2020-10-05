$(document).ready(() => {
  $("#get-books").on("click", e => {
    const search = $("#search").val();
    findBooks(search);
    e.preventDefault();
  });
  function findBooks(search) {
    const apiKey = "AIzaSyDSFBT0tHZK1nwTRm12mg6cCQjODL09PmY";
    $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`,
      dataType: "json",
      success: res => {
        console.log(res);
        const books = res.items;
        let output = "";
        $.each(books, (index, book) => {
          output += `
          <div class="row">          
            <div class="card">
              <div class="card-image">
                <img src="${book.volumeInfo.imageLinks.thumbnail}">
              </div>
              <div class="card-content">
                <span class="card-title">${book.volumeInfo.title}</span>
                <h6>Written by ${book.volumeInfo.authors}</h6>
                <p>${book.volumeInfo.description}</p>
              </div>
              <div class="card-action">
                <button class="button" id="save-book">Add To Book List</button>

              </div>
            </div>           
          </div> 
          `;
        });
        $("#google-books").html(output);
      }
    });
  }
  $("#get-nytlist").on("click", e => {
    const find = $("#top-books").val();
    topBooks(find);
    e.preventDefault();
  });
  function topBooks() {
    const apiKeyTwo = "uemMxG1ng0ii7KDe1ORTbiQTWqEVCDC8";
    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=${apiKeyTwo}`,
      dataType: "json",
      success: res => {
        console.log(res);
        const books = res.results.books;
        let output = "";
        $.each(books, (index, list) => {
          console.log(list);
          output += `
          <div class="row">          
            <div class="card">
              <div class="card-image">
                <img src="${list.book_image}">
              </div>
              <div class="card-content">
                <span class="card-title">${list.title}</span>
                <h6>Written by ${list.author}</h6>
                <p>${list.description}</p>
              </div>
              <div class="card-action">
                <a href="#">Add To Book List</a>
                <a href="${list.amazon_product_url}"> Buy</a>
              </div>
            </div>           
          </div> 
          `;
        });
        $("#nytlist").html(output);
      }
    });
  }
  
  $("#save-book").on("click", function(){
    var title = book.volumeInfo.title;
    console.log(title)
  })

});

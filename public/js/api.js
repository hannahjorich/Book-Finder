$(document).ready(() => {
  $("#get-books").on("click", e => {
    const search = $("#find-books").val();
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
                <img src="">
                </div>
                <div class="card-content">
                <span class="card-title">${book.volumeInfo.title}</span>
                <h6>Written by ${book.volumeInfo.authors}</h6>
                <p>${book.volumeInfo.description}</p>
              </div>
              <div class="card-action">
                <a href="#">Add To Book List</a>
              </div>
            </div>           
          </div> 
          `;
        });
        $("#google-books").html(output);
      }
    });
  }
});

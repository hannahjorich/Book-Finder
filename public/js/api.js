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
            <div class="col s12 m7">
              <div class="card horizontal z-depth-2">
                <div class="card-image">
                  <img src="${book.volumeInfo.imageLinks.thumbnail}">
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <ul>
                      <li>${book.volumeInfo.title}</p>
                      <li>${book.volumeInfo.authors}</p>
                      <li>${book.searchInfo.textSnippet}</p>
                    </ul>
                  </div>
                  <div class="card-action">
                    <a onclick = "bookSelected('${book.id}')" class="btn pulse-effect waves-light blue"><i class="material-icons">add</i></a>
                  </div>
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
          <div class="col s12 m7">
              <div class="card horizontal z-depth-2">
                <div class="card-image">
                  <img src="${list.book_image}">
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <ul>
                      <li>Ranks ${list.rank}</p>
                      <li>${list.title}</p>
                      <li>${list.author}</p>
                      <li>${list.description}</p>
                    </ul>
                  </div>
                  <div class="card-action">
                  <a href="#"class="btn pulse-effect waves-light blue"><i class="material-icons">add</i></a>
                  <a href="${list.amazon_product_url}" target="_blank" class="waves-effect waves-light btn-small">Buy</a>
                  </div>
                </div>
              </div>
            </div> 
          `;
        });
        $("#nytlist").html(output);
      }
    });
  }
});

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
                  <img class ="image" src="${book.volumeInfo.imageLinks.thumbnail}">
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <ul>
                      <li class ="title">${book.volumeInfo.title}</p>
                      <li class ="author">${book.volumeInfo.authors}</p>
                      <li class ="description">${book.searchInfo.textSnippet}</p>
                    </ul>
                  </div>
                  <div class="card-action">
                    <button class="save-book btn pulse-effect waves-light blue"><i class="material-icons">add</i></button>
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
                      <li class ="title">${list.title}</p>
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
// eslint-disable-next-line prefer-arrow-callback
$(document).on("click", ".save-book", function() {
  const thumbnail = $(this)
    .closest(".card")
    .find("img")
    .attr("src");
  const title = $(this)
    .closest(".card-stacked")
    .find(".title")
    .text()
    .trim();
  const author = $(this)
    .closest(".card-stacked")
    .find(".author")
    .text()
    .trim();
  const description = $(this)
    .closest(".card-stacked")
    .find(".description")
    .text()
    .trim();
  console.log(title);
  console.log(author);
  console.log(description);
  $.ajax({
    method: "POST",
    url: "/savebook",
    data: {
      title: title,
      description: description,
      author: author,
      thumbnail: thumbnail
    }
  }).then(res => {
    console.log(res);
  });
});

// eslint-disable-next-line no-unused-vars
function listBooks() {
  $.ajax({
    method: "GET",
    url: "/booklist",
    dataType: "json",
    success: res => {
      console.log(res);
      const books = res;
      let output = "";
      $.each(books, (index, book) => {
        console.log(book);
        output += `
          <div class="col s12 m7">
            <div class="card horizontal z-depth-2">
              <div class="card-image">
                <img class ="image" src="${book.thumbnail}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <ul>
                    <li class ="title">${book.title}</p>
                    <li class ="author">${book.author}</p>
                    <li class ="description">${book.description}</p>
                  </ul>
                </div>
                <div class="card-action">
                  <button class="save-book btn pulse-effect waves-light blue"><i class="material-icons">add</i></button>
                </div>
              </div>
            </div>
        `;
      });
      console.log(output);
      $("#google-books").html(output);
    }
  });
}

const apiKey = "";
const topBooks = [];

$(document).ready(function(e){
  $("#get-button").on("click" ,findBooks(), function(){
    
    e.preventDefault()
  });
  function findBooks() {
    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/books/v3/lists/2020-09-30/hardcover-fiction.json?api-key=${apiKey}`,
      dataType: "json",
      success: function(res){
        console.log(res)
      }
      
    }) 
  }
});
function myFunction() {
  // Declare variables
  var input, filter, title, summary, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  title = document.getElementsByClassName("card-title"); //list of title
  summary = document.getElementsByClassName("card-text"); //list of summary
  genreOfMovie = document.getElementsByClassName("card-subtitle"); 
  
  card = document.getElementsByClassName("card"); //list of card

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < title.length; i++) {
    a = title[i].innerText+summary[i].innerText+genreOfMovie[i].innerText;
    if (a.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
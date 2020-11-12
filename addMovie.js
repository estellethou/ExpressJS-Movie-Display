fetch('http://127.0.0.1:3000/api/movies/all')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        var mainContainer = document.getElementById("myData");

        mainContainer.classList.add("row");
        mainContainer.classList.add("container");
        mainContainer.style.width="100%";
        mainContainer.style.margin="auto";

        var card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "30%";
        card.style.margin = "1%";
        
        var item = document.createElement("div");
        item.classList.add("card-body");

        var title = document.createElement("h5");
        title.innerHTML = data[i].title;
        title.classList.add("card-title");

        var genreOfMovie = document.createElement("h6");
        genreOfMovie.innerHTML = 'Genre: ' + data[i].genre;
        genreOfMovie.classList.add("card-subtitle");
        genreOfMovie.classList.add("mb-2");
        genreOfMovie.classList.add("text-muted");

        var summary = document.createElement("p");
        summary.innerHTML = data[i].summary;
        summary.classList.add("card-text");
        
        var button = document.createElement("button");
        button.setAttribute("id", "myBtn-"+i);
        button.classList.add("myBtn");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.innerHTML = "Show more";

        let popup = document.createElement("div");
        popup.setAttribute("id", "myModal-" + i);
        popup.classList.add("modal");

        let popupContent = document.createElement("div");
        popupContent.classList.add("modal-content");

        let close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;"

        let p = document.createElement("p");
        p.innerHTML = 'Title: ' + data[i].title+ "<br/>" +
        summary.innerHTML + "<br/>" +
        'Duration: ' + data[i].min_duration + ' min <br/>' +
        'Production year: ' + data[i].prod_year + "<br/>" +
        'Genre: ' + data[i].genre + "<br/>";
        if (data[i].producer !== null){
            p.innerHTML += 'Producer: ' + data[i].producer;
        };

        button.onclick = function() {
            popup.style.display = "block";
        };
        
        close.onclick = function() {
            popup.style.display = "none";
        };

        window.addEventListener("click", function(event) {
            if (event.target == popup) {
                    popup.style.display = "none";
                }
        });

        popup.appendChild(popupContent);
        popupContent.appendChild(close);
        popupContent.appendChild(p);

        
        const genre = fetch('http://127.0.0.1:3000/api/movies/' + i + '/genres')
        .then(function (response) {
            return response.json();
        })
        .then(function (data_genre) {
            return(data_genre.name);
            //genreOfMovie.innerHTML = "Genre: " + data_genre.name;
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
        
        
        item.appendChild(title);
        item.appendChild(summary);
        item.appendChild(genreOfMovie);
        item.appendChild(button);
        item.appendChild(popup);
        card.appendChild(item);
        mainContainer.appendChild(card);
        
        }
    }
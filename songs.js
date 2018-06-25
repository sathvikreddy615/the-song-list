$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    let $loadBtn = $("#load-songs"); // gets button ID
    $loadBtn.text("Load Songs"); // sets text content of button

    // Use jQuery to get a reference to `song-list`

    let $songArticle = $("#song-list"); // gets article ID

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */


    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */

    $loadBtn.click(() => { // add click event handler to load button
        $.ajax("songs.json") // make API call to "songs.json file"
            .then(responseFromSongsJS => {
                // loop through parameter object (songs) and return the array of data
                for (let i in responseFromSongsJS) {
                    // loop through array located paramter object (songs) and return data inside of that array
                    responseFromSongsJS[i].forEach(song => {
                        // creates <section> element and sets a class. <h1> and 2nd <section> elements will be appended to this
                        let $firstSection = $("<section>");
                        $firstSection.attr("class", "song");
                        // creates <h1> element. sets class and text song name
                        let $header = $("<h1>");
                        $header.attr("class", "song_title");
                        $header.text(`${song.title}`);
                        // creates <section> element. sets class and text to artist and album
                        let $secondSection = $("<section>");
                        $secondSection.attr("class", "song_description");
                        $secondSection.text(`Performed by ${song.artist} on the album ${song.album}`);
                        // append $header and $secondSection data stored in these variables to firstSection variable
                        $header.appendTo($firstSection);
                        $secondSection.appendTo($firstSection);
                        // append firstSection variable to songArticle variable container located in index.HTML
                        $firstSection.appendTo($songArticle);
                    });
                }
            })
    });

});


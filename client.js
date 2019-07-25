console.log('client.js is loading');

// lets use jquery!
// this waits until DOM is loaded
// $(document).ready(function() {
//     console.log('DOM is ready!');
// })
// same thing as above
$(document).ready(handleReady)
function handleReady(){
    console.log('DOM IS READY');
    $('#some-id')
    $('.some-class')
    $('li').children().first();
    $('li a')
    $('.mic', '.check')

    // $('.once-blue').css('color', 'blue')
    // $('.once-blue').addClass("blue");
    // $('.once-blue').removeClass("blue");
    $('.once-blue').toggleClass("blue");

    // Adding a p tag to my dom, with the test Jquery is Awesome;
    //// First need to select item - find something to hold onto
    //// added an ID on HTML, via a DIV, and called it through below
    // $('#target').append('<p>jquery is awesome</p>')
    // $('#target').append('<p>jquery is hard</p>')
    $('#target').prepend('<p>stepping in front</p>')

    // When I click the add food button, I want to see a console.log
    // add something for jquery to hang onto in HTML
    // add jquery
    // create function and test in console
    $('#addFoodButton').on('click', handleClick)

    // $(existNow).on('click', existsInTheFuture, handleDelete)
    // this is telling jquery to hold on while jqery is loading
    $('#tastyList').on('click', '.foodItem', handleDelete)
        
    }
    function handleDelete() {
        console.log('clicked delete');
        //$(this) will get the item that called this function
        $(this).parent().remove()
        // did .parent().remove() so when deletes it goes up to parent, not the button

        // $(this).remove()
        // $(this).empty() --clears the string, but NOT the list item so have bullet point
        // $(this).html('') --clears the string, but NOT the list item so have bullet point--setting it to an empty string

    }

    function handleClick() {
        // console.log('clicked');
        // Go get the value of our input -- so add ID to jquery
        // command to get text -- .val
        $('#foodToAdd').val()
        let newFood = $('#foodToAdd').val()
        console.log(newFood);
        
        // $('#tastyList').append(`<li>` + newFood + `</li>`)
        // line below is the same, but simplier - can also add new variables
        // added a class so we can handle the delete from above
        $('#tastyList').append(`<li >
        ${newFood} is the best
        <button class="foodItem">Delete Me</button>
        </li>`)
        // moved class="foodItem" to be inside the button

        // below clears box as a setter
        $('#foodToAdd').val('');
        
    }

console.log('client.js is done loading');

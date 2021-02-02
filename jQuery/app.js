$("Document").ready(function() {
    $("body").append("<button type='button' id='nice-btn'>Get nice message</button>");
    $("#nice-btn").click(function() {
        alert("coolio");
    }) // #1

    let $formButton = $("<button type='submit'>Submit</button>");
    let $formTextField = $("<input type='text' placeholder='Enter message'></input>");
    let $form = $("<form id='form'></form>");

    $form.append($formTextField);
    $form.append($formButton);
    $("body").append($form);

    $formButton.click(function() {
        alert($formTextField.val());
    }); // #2

    $div = $("<div></div>");
    $div.css("height", "5em");
    $div.hover(divHover, divHoverAway);
    $("body").append($div); // #3

    $p = $("<p>Nāgadāsaka was king of Magadha from 437 to 413 BCE and son of Munda. He slew his father and ruled for twenty-four years. The people deposed him and made Shishunaga king in his place. Shishunaga was the founder of Shishunaga dynasty.</p>");
    $p.click(function() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        $p.css("color", "#" + randomColor);
    });
    $("body").append($p); // #4

    $spanButton = $("<button type='button' id='span-btn'>Display Name</button>")
    $spanDiv = $("<div id='span-div'></div>")
    $spanButton.click(function() {
        $spanDiv.append($("<span>Ethan</span>"))
    })
    $("body").append($spanButton);
    $('body').append($spanDiv); // #5

    let friendArray = ["Laura", "Dale", "Audrey", "Shelly", "Bob", "Donna", "Bobby", "James", "Harry", "Leland"];
    let buttonPress = 0
    $listButton = $("<button type='button' id='list-btn'>List Friend</button>");
    $friendList = $("<ul class='friend-list'></ul>");
    $("body").append($listButton);
    $("body").append($friendList);
    $listButton.click(function() {
        if (buttonPress <= 9) {
            $friendList.append(`<li>${friendArray[buttonPress]}</li>`);
            console.log(buttonPress);
            buttonPress++;
        } else {
            buttonPress = 0;
        }
    }) // #6
})

function divHover() {
    $div.css({
        "background-color": "green"
    })
};
function divHoverAway() {
    $div.css("background-color", "transparent")
}
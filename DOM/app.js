window.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Get a nice message.");
    button.appendChild(buttonText);
    button.addEventListener("click", function() {
        alert("coolio")
    })
    document.body.appendChild(button); // #1

    let form = document.createElement("form");
    let formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.id = "message";
    
    let formButton = document.createElement("button");
    let formButtonText = document.createTextNode("Submit")
    formButton.setAttribute("type", "button");
    formButton.appendChild(formButtonText);
    formButton.addEventListener("click", function() {
        alert(document.getElementById("message").value)
    })

    form.appendChild(formInput);
    form.appendChild(formButton);
    document.body.appendChild(form); // #2

    let div = document.createElement("div");
    div.id = "div";
    div.style.height = "5em"
    div.addEventListener("mouseenter", function() {
        div.style.backgroundColor = "green";
    });
    div.addEventListener("mouseleave", function() {
        div.style.backgroundColor = "transparent";
    });
    document.body.appendChild(div); // #3

    let p = document.createElement("p");
    let pText = document.createTextNode("Solar cycle 20 was the twentieth solar cycle since 1755, when extensive recording of solar sunspot activity began. The solar cycle lasted 11.4 years, beginning in October 1964 and ending in March 1976.")
    p.appendChild(pText);
    p.addEventListener("click", function() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        p.style.color = "#" + randomColor;
    })
    document.body.appendChild(p); // #4

    let spanButton = document.createElement("button");
    let spanButtonText = document.createTextNode("Show name");
    spanButton.appendChild(spanButtonText);

    let spanDiv = document.createElement("div");
    spanDiv.id = "spanDiv";

    let span = document.createElement("span")
    let spanText = document.createTextNode("Ethan")
    span.appendChild(spanText);

    spanButton.addEventListener("click", function() {
        spanDiv.appendChild(span);
    });
    
    document.body.appendChild(spanButton);
    document.body.appendChild(spanDiv); // #5

    let friendArray = ["Laura", "Dale", "Audrey", "Shelly", "Bob", "Donna", "Bobby", "James", "Harry", "Leland"];
    let buttonPress = 0;
    let friendListButton = document.createElement("button");
    let friendListButtonText = document.createTextNode("List friend");
    friendListButton.appendChild(friendListButtonText);

    let friendList = document.createElement("ul");

    friendListButton.addEventListener("click", function() {
        if (buttonPress <= 9) {
            let friend = document.createElement("li")
            let friendText = document.createTextNode(friendArray[buttonPress])
            friend.appendChild(friendText);
            friendList.appendChild(friend);
            buttonPress++;
        } else {
            buttonPress = 0;
        }
    })

    document.body.appendChild(friendListButton);
    document.body.appendChild(friendList); // #6
})
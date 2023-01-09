// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello (event) {
            console.log(event);
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";

            document.getElementById("content").innerHTML = message;

            if (name === "student") {
                document.querySelector("h1").textContent += " & Lovin' it!";;
            }
        }
        // Unobtrusive event binding
        document.querySelector("button").addEventListener("click", sayHello);

        document.querySelector("body").addEventListener("mousemove",
            function(event){
                console.log("(" + event.clientX + "," + event.clientY + ")");
            }
        );
    }
);



// document.querySelector("button")
//   .onclick = sayHello;




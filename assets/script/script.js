particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 8,  // Number particles
            "density": {
                "enable": true,
                "value_area": 500 // Density area
            }
        },
        "shape": {
            "type": "image", // Select the type
            "image": {
                "src": "assets/img/leaf.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "speed": 1,
            "direction": "bottom-right",
            "out_mode": "out",
            "straight": false,
            "bounce": false,
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
            },
            "onclick": {
                "enable": false
            }
        }
    }
});


let titleText = "Sarah & James ";
let titleIndex = 0;

function scrollTitle() {
    document.title = titleText.substring(titleIndex) + titleText.substring(0, titleIndex);
    titleIndex = (titleIndex + 1) % titleText.length;
    setTimeout(scrollTitle, 200);
}

scrollTitle();
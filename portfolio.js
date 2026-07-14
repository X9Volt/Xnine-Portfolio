/* ==========================================
        XNINE VOLT PORTFOLIO V2
        JavaScript
========================================== */


/*
    Update copyright year automatically
*/

const year = new Date().getFullYear();

const copyright = document.querySelector("footer p");

if(copyright){

    copyright.innerHTML = `© ${year} Xnine Volt`;

}


/*
    Highlight external links
    by opening them safely
*/

const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);


externalLinks.forEach(link => {

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});


/*
    Simple scroll reveal effect
*/

const revealElements = document.querySelectorAll(
    ".card, .project-card, .stat-card"
);


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const position =
        element.getBoundingClientRect().top;


        if(position < window.innerHeight - 80){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";

        }

    });

};


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(30px)";

    element.style.transition =
    "0.6s ease";

});


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();
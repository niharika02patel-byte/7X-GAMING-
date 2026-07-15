// 7X GAMING Script

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input");

            let name = inputs[0].value;
            let uid = inputs[1].value;
            let ign = inputs[2].value;
            let whatsapp = inputs[3].value;

            if (name && uid && ign && whatsapp) {

                alert(
                    "Registration Successful!\n\n" +
                    "Name: " + name +
                    "\nUID: " + uid +
                    "\nIGN: " + ign +
                    "\nWhatsApp: " + whatsapp
                );

                form.reset();

            } else {
                alert("Please fill all details.");
            }
        });
    }

});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const paginaAtual = window.location.pathname;

    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const urlDoLink = new URL(href, window.location.href);

        if (urlDoLink.pathname === paginaAtual) {

            link.classList.add("active");

            const dropdown = link.closest(".dropdown");

            if (dropdown) {
                const toggle = dropdown.querySelector(".dropdown-toggle");

                if (toggle) {
                    toggle.classList.add("active");
                }
            }
        }

    });

});
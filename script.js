document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupLink = document.getElementById("popup-link");
    const closeButton = document.querySelector(".close-btn");

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            const behanceLink = this.getAttribute("data-link");

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupLink.href = behanceLink;
            popup.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

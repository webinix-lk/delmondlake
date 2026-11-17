document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const about = document.querySelector("#about");

    window.addEventListener("scroll", () => {

        if (about.getBoundingClientRect().top <= 100) {
            navbar.classList.add("show");
        } else {
            navbar.classList.remove("show");
        }

    });

});
// ROOM DETAILS DATA

const roomData = {

    rooms: {
        label: "01 / ACCOMMODATION",
        title: "COMFORTABLE ROOMS",
        description: "Discover beautifully designed rooms with comfortable interiors and peaceful surroundings. Enjoy a relaxing stay at DELMOND Lake.",

        images: [
            "WhatsApp Image 2026-11-14 at 17.45.56.jpeg",
            "room-2.jpg",
            "room-3.jpg"
        ],

        facilities: [
            ["❄", "Air Conditioning"],
            ["📶", "Free Wi-Fi"],
            ["🚿", "Private Bathroom"],
            ["📺", "Flat Screen TV"],
            ["🛏", "Comfortable Bed"],
            ["🌿", "Garden View"]
        ]
    },

    suites: {
        label: "02 / PREMIUM STAY",
        title: "LUXURIOUS SUITES",
        description: "Experience extra space, elegant interiors and a peaceful atmosphere designed for a memorable and comfortable getaway.",

        images: [
            "11651fed-24d0-4226-b9b6-8657fb3b44a4.jpg",
            "suite-2.jpg",
            "suite-3.jpg"
        ],

        facilities: [
            ["❄", "Air Conditioning"],
            ["📶", "Free Wi-Fi"],
            ["🛁", "Luxury Bathroom"],
            ["📺", "Smart TV"],
            ["🛋", "Living Area"],
            ["🌅", "Lake View"]
        ]
    },

    deluxe: {
        label: "03 / ELEGANT STAY",
        title: "DELUXE ROOMS",
        description: "Discover beautifully designed rooms with modern comfort, relaxing interiors and everything you need for a peaceful stay.",

        images: [
            "WhatsApp Image 2026-11-14 at 17.45.45.jpeg",
            "deluxe-2.jpg",
            "deluxe-3.jpg"
        ],

        facilities: [
            ["❄", "Air Conditioning"],
            ["📶", "Free Wi-Fi"],
            ["🚿", "Private Bathroom"],
            ["📺", "Flat Screen TV"],
            ["🛏", "Premium Bedding"],
            ["🌳", "Nature View"]
        ]
    }

};


// SELECT ELEMENTS

const modal = document.getElementById("roomModal");

const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalLabel = document.getElementById("modalLabel");

const modalDescription = document.getElementById("modalDescription");

const facilitiesList = document.getElementById("facilitiesList");

const imageCounter = document.getElementById("imageCounter");

const prevImage = document.getElementById("prevImage");

const nextImage = document.getElementById("nextImage");

let currentImages = [];

let currentIndex = 0;


// OPEN POPUP

document.querySelectorAll("[data-room]").forEach(button => {

    button.addEventListener("click", () => {

        const selectedRoom = button.dataset.room;

        const room = roomData[selectedRoom];

        if (!room) return;

        currentImages = room.images;

        currentIndex = 0;

        modalTitle.textContent = room.title;

        modalLabel.textContent = room.label;

        modalDescription.textContent = room.description;


        // FACILITIES

        facilitiesList.innerHTML = "";

        room.facilities.forEach(facility => {

            const item = document.createElement("div");

            item.className = "facility-item";

            const icon = document.createElement("span");
            icon.textContent = facility[0];

            const name = document.createElement("span");
            name.textContent = facility[1];

            item.append(icon, name);

            facilitiesList.appendChild(item);

        });


        updateImage();

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// CHANGE IMAGE

function updateImage() {

    modalImage.src = currentImages[currentIndex];

    imageCounter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;

}


// NEXT IMAGE

nextImage.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    updateImage();

});


// PREVIOUS IMAGE

prevImage.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    updateImage();

});


// CLOSE POPUP

function hideModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

closeModal.addEventListener("click", hideModal);


// CLICK OUTSIDE POPUP

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        hideModal();
    }

});

// PREVENT OLD SCROLL POSITION

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// ALWAYS GO TO HOME WHEN PAGE LOADS

window.addEventListener("pageshow", function () {

    // Remove URL hash
    history.replaceState(null, "", window.location.pathname);

    // Go to top
    window.scrollTo(0, 0);

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal");

        } else {

            entry.target.classList.remove("reveal");

        }

    });

}, {
   
});


document.querySelectorAll(".about-left, .about-right").forEach(element => {

    observer.observe(element);

});
document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("#rooms");
    const cards = document.querySelectorAll(
        "#rooms .showcase-item"
    );

    const roomLink = document.querySelector(
        'a[href="#rooms"]'
    );

    function playAnimation() {

        cards.forEach((card, index) => {

            card.classList.remove("room-reveal");

            void card.offsetWidth;

            card.style.animationDelay = `${index * 0.2}s`;

            card.classList.add("room-reveal");

        });

    }

    // Scroll animation

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                playAnimation();
            }

        });

    }, {
        threshold: 0.2
    });

    if (section) {
        observer.observe(section);
    }

    // Navbar click

    if (roomLink) {

        roomLink.addEventListener("click", () => {

            const rect = section.getBoundingClientRect();

            const alreadyVisible =
                rect.top < window.innerHeight &&
                rect.bottom > 0;

            if (alreadyVisible) {
                playAnimation();
            }

            // If not visible, IntersectionObserver
            // will trigger animation when section enters view.

        });

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".reviews-track");

    if (track) {

        track.innerHTML += track.innerHTML;

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".gallery-section");
    const viewport = document.querySelector(".gallery-viewport");
    const track = document.querySelector(".gallery-track");

    const cards = document.querySelectorAll(".gallery-card");

    let currentIndex = 0;

    // =========================
    // SCROLL BASED GALLERY
    // =========================

    function moveGallery() {

        const sectionTop = section.offsetTop;

        const scrollDistance =
            section.offsetHeight - window.innerHeight;

        const scrolled = window.scrollY - sectionTop;

        let progress = scrolled / scrollDistance;

        progress = Math.max(0, Math.min(1, progress));

        const maxMove =
            track.scrollWidth - viewport.clientWidth;

        track.style.transform =
            `translateX(${-maxMove * progress}px)`;

    }

    window.addEventListener("scroll", moveGallery);

    window.addEventListener("resize", moveGallery);

    moveGallery();


    // =========================
    // LIGHTBOX ELEMENTS
    // =========================

    const lightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCaption =
        document.getElementById("lightboxCaption");

    const lightboxCount =
        document.getElementById("lightboxCount");


    // OPEN IMAGE

    function openImage(index) {

        currentIndex =
            (index + cards.length) % cards.length;

        const card = cards[currentIndex];

        const img = card.querySelector("img");

        const title = card.querySelector("h2");

        lightboxImage.src = img.src;

        lightboxCaption.textContent = title.textContent;

        lightboxCount.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${cards.length}`;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    // CARD CLICK

    cards.forEach((card, index) => {

        card.addEventListener("click", () => {

            openImage(index);

        });

    });


    // NEXT IMAGE

    document.querySelector(".lightbox-next")
        .addEventListener("click", () => {

            openImage(currentIndex + 1);

        });


    // PREVIOUS IMAGE

    document.querySelector(".lightbox-prev")
        .addEventListener("click", () => {

            openImage(currentIndex - 1);

        });


    // CLOSE LIGHTBOX

    function closeImage() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    document.querySelector(".lightbox-close")
        .addEventListener("click", closeImage);


    // CLICK OUTSIDE IMAGE

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            closeImage();
        }

    });


    // KEYBOARD CONTROLS

    document.addEventListener("keydown", (e) => {

        if (!lightbox.classList.contains("active")) return;

        if (e.key === "ArrowRight") {
            openImage(currentIndex + 1);
        }

        if (e.key === "ArrowLeft") {
            openImage(currentIndex - 1);
        }

        if (e.key === "Escape") {
            closeImage();
        }

    });

});


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");

    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");

    // Set minimum date

    const today = new Date();

    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    checkin.min = localToday;
    checkout.min = localToday;


    // Check-out date validation

    checkin.addEventListener("change", () => {

        checkout.min = checkin.value;

        if (checkout.value && checkout.value <= checkin.value) {
            checkout.value = "";
        }

    });


    // WhatsApp booking

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const arrival = checkin.value;
        const departure = checkout.value;

        const adults = document.getElementById("adults").value;
        const children = document.getElementById("children").value;

        const room = document.querySelector(
            'input[name="room"]:checked'
        );

        const requests = document.getElementById("requests").value.trim();

        if (departure <= arrival) {
            alert("Please select a valid check-out date.");
            return;
        }

        if (!room) {
            alert("Please select a room.");
            return;
        }

        // Replace with your resort WhatsApp number

        const phone = "947XXXXXXXX";

        const message =
`*DELMOND RESORT - BOOKING REQUEST*

Hello DELMOND!

I would like to request a room reservation.

*Guest Name:* ${name}

*Check-in:* ${arrival}
*Check-out:* ${departure}

*Adults:* ${adults}
*Children:* ${children}

*Room:* ${room.value}

*Special Requests:* ${requests || "None"}

Please check availability and share the booking details.

Thank you!`;

        const whatsappLink =
            "https://wa.me/" + phone +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });

});



function toggleMenu() {
    document.getElementById("mobileNav")
        .classList.toggle("show");
}

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("mobileNav")
            .classList.remove("show");
    });
});

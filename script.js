const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// دکمه آره در صفحه اول
document.getElementById("yes1").addEventListener("click", () => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
});

// دکمه آره در صفحه دوم
document.getElementById("yes2").addEventListener("click", () => {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    createHearts(40);
});

// فرار کردن دکمه نخیر
function runAway(button) {
    button.style.position = "fixed";
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + "px";
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + "px";
    button.style.zIndex = "9999";
}

document.getElementById("no1").addEventListener("mouseenter", function() {
    runAway(this);
});

document.getElementById("no2").addEventListener("mouseenter", function() {
    runAway(this);
});

// قلب‌های متحرک
function createHearts(count = 1) {
    const container = document.getElementById("backgroundHearts");

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.className = "heart";
        heart.textContent = ["💖", "💕", "💗", "❤️", "🌸", "🦋"][
            Math.floor(Math.random() * 6)
        ];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }
}

setInterval(() => createHearts(1), 700);
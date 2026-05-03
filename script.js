// ===============================
// HEADER HOVER EFFECT
// ===============================
const heading = document.getElementById("heading");

heading.addEventListener("mouseenter", () => {
    heading.style.color = "darkorange";
});

heading.addEventListener("mouseleave", () => {
    heading.style.color = "darkslategrey";
});


// ===============================
// FORM: VALIDATION + CALCULATION
// ===============================
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bill = parseFloat(form.billTotal.value);
    const service = form.serviceRating.value.toLowerCase();
    const people = parseInt(form.numPaying.value, 10);

    const feedback = document.getElementById("serviceRatingFeedback");

    // VALIDATION (service rating)
    if (!["poor", "good", "excellent"].includes(service)) {
        feedback.textContent = "Please enter: poor, good or excellent";
        feedback.style.color = "red";
        return;
    }

    // clear previous feedback
    feedback.textContent = "";

    // VALIDATION (people)
    if (people <= 0) {
        alert("Number of people must be at least 1");
        return;
    }

    // CALCULATION
    let tipPercent = 0;

    if (service === "excellent") tipPercent = 0.2;
    else if (service === "good") tipPercent = 0.1;
    else if (service === "poor") tipPercent = 0;

    const tip = bill * tipPercent;
    const total = bill + tip;
    const perPerson = total / people;

    // OUTPUT
    document.getElementById("totalWithTip").textContent = total.toFixed(2);
    document.getElementById("perPerson").textContent = perPerson.toFixed(2);
});


// ===============================
// UI CONTROLS (MOVE + CLOSE)
// ===============================
const box = document.getElementById("tipulator-wrapper");

// Move right
document.getElementById("rightButton").addEventListener("click", () => {
    box.style.transform = "translateX(500px)";
});

// Move left
document.getElementById("leftButton").addEventListener("click", () => {
    box.style.transform = "translateX(0)";
});

// Close app
document.getElementById("closeButton").addEventListener("click", () => {
    document.body.innerHTML = "<h1>Thank you for using the tipulator</h1>";
});

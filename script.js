function toggleFAQ(button) {
    let answer = button.nextElementSibling;
    let span = button.querySelector("span");
    
    if (answer.style.display === "" || answer.style.display === "none") {
        answer.style.display = "block";
        span.textContent = "-";
    } else {
        answer.style.display = "none";
        span.textContent = "+";
    }
}

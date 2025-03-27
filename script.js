document.getElementById("calculate-btn").addEventListener("click", calculateGPA);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

function calculateGPA() {
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);
    let obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
    let resultDiv = document.getElementById('result');
    
    if (isNaN(totalMarks) || isNaN(obtainedMarks) || totalMarks <= 0 || obtainedMarks < 0 || obtainedMarks > totalMarks) {
        alert("Please enter valid marks!");
        return;
    }

    let percent = (obtainedMarks / totalMarks) * 100;
    let gpa, grade;

    if (percent >= 90) { gpa = 4.0; grade = "A+"; }
    else if (percent >= 85) { gpa = 4.0; grade = "A"; }
    else if (percent >= 80) { gpa = 3.66; grade = "A-"; }
    else if (percent >= 75) { gpa = 3.33; grade = "B+"; }
    else if (percent >= 71) { gpa = 3.0; grade = "B"; }
    else if (percent >= 68) { gpa = 2.66; grade = "B-"; }
    else if (percent >= 61) { gpa = 2.0; grade = "C"; }
    else if (percent >= 50) { gpa = 1.0; grade = "D"; }
    else { gpa = 0; grade = "F"; }

    document.getElementById('gpa').textContent = gpa.toFixed(2);
    document.getElementById('grade').textContent = grade;
    document.getElementById('percentage').textContent = percent.toFixed(2);

    resultDiv.classList.remove("hidden");
    setTimeout(() => resultDiv.classList.add("show"), 100);
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let icon = document.querySelector("#theme-toggle i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
}

function analyze() {
    let sleep = document.getElementById("sleep").value;
    let exercise = document.getElementById("exercise").value;
    let social = document.getElementById("social").value;

    let score = 0;

    // Sleep logic
    if (sleep >= 7) score += 2;
    else if (sleep >= 5) score += 1;

    // Exercise logic
    if (exercise === "regularly") score += 2;
    else if (exercise === "sometimes") score += 1;

    // Social logic
    if (social === "yes") score += 2;

    let resultText = "";

    if (score >= 5) resultText = "Your biopsychosocial wellness is GOOD 😊";
    else if (score >= 3) resultText = "Your wellness is AVERAGE 🙂";
    else resultText = "Your wellness is LOW. Try improving lifestyle habits 😟";

    document.getElementById("result").innerHTML = <h3>${resultText}</h3>;
}

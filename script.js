document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert tinggi dari cm ke meter
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const bmi = weight / (height * height);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Bersihkan hasil sebelumnya

    if (isNaN(bmi) || isNaN(age) || age < 1) {
        resultDiv.textContent = "Masukkan berat, tinggi, dan umur yang valid.";
    } else {
        let status = "";

        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi < 24.9) {
            status = "Normal weight";
        } else if (bmi < 29.9) {
            status = "Overweight";
        } else {
            status = "Obesity";
        }

        let genderText = "Laki-laki";

        if (gender === "female") {
            genderText = "Perempuan";
        }

        resultDiv.textContent = `BMI Anda: ${bmi.toFixed(2)} (${status}) - Umur: ${age} tahun - Jenis Kelamin: ${genderText}`;
    }
}

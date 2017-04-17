function saludar() {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h1> Saludos </h1>";
}
window.onload = function () {
    //saludar();
    document.getElementById('btnSaludar').addEventListener('click', saludar);
}
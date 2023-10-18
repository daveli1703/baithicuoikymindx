function starTriangle(n) {
    if (n < 1 || n > 10) {
        return "Vui lòng nhập số nguyên từ 1 đến 10.";
    }
    let result = "";
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= i; j++) {
            row.push("*");
        }
        result += row.join(" ") + "<br>";
    }
    return result;
}

function printStarTriangle() {
    const numRows = parseInt(document.getElementById("numRows").value);
    const resultElement = document.getElementById("result");
    const result = starTriangle(numRows);
    resultElement.innerHTML = result;
}
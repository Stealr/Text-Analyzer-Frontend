async function sendFile () {
    const fileInput = document.getElementById("fileInput");
    const result = document.getElementById("fileResult")
    const file = fileInput.files[0];
    formData = new FormData()

    formData.append("file", fileInput.files[0], 'text.txt');
    try {
        const response = await fetch("http://localhost:8080/api/documents", {
            method: "POST", 
            body: formData,
        });
        const data = await response.json();
        result.textContent = JSON.stringify(data)
    } catch (err) {
        result.textContent = "Ошибка: " + err.message;
    }
} 

async function sendText () {
    const textInput = document.getElementById("textInput");
    const result = document.getElementById("textResult")

    console.log(JSON.stringify({text: textInput.value}))

    try {
        const response = await fetch("http://localhost:8080/api/analysis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text: textInput.value}),
        });
        const data = await response.json();
        result.textContent = JSON.stringify(data)
    } catch (err) {
        result.textContent = "Ошибка: " + err.message;
    }
}
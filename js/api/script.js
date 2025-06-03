async function sendData() {
    const textInput = document.getElementById("textInput");
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0]    
    const words = document.getElementById("words");
    const sentences = document.getElementById("sentences");
    const index = document.getElementById("index");
    const topicContainer = document.getElementById("topics")
    var data, headers, address;

    if (file) {
        data = new FormData()
        address = "http://localhost:8080/api/documents"
        data.append("file", fileInput.files[0], 'text.txt')
    } else {
        headers = {
                "Content-Type": "application/json"
            }
        address = "http://localhost:8080/api/analysis"
        data = JSON.stringify({text: textInput.value})
    }

    console.log(data, headers)

    try {
        const response = await fetch(address, {
            method: "POST",
            headers: headers,
            body: data,
        })
        const responseData = await response.json()
        console.log(responseData)
        words.textContent = JSON.stringify(responseData.word_count)
        sentences.textContent = JSON.stringify(responseData.sentence_count)
        index.textContent = JSON.stringify(responseData.readability_score)

        topicContainer.innerHTML = ""
        responseData.keywords.forEach(element => {
            const tab = document.createElement("div")
            tab.className = "uploader__result-tab"
            tab.textContent = element
            topicContainer.appendChild(tab)
        });
    } catch (err) {
        console.error(err)
    }
}
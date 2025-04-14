const imageUpload = document.getElementById("image-upload");
const resultImgUpload = document.getElementById("result-img-upload");
const countUpload = document.getElementById("count-upload");

imageUpload.addEventListener("change", () => {
    const file = imageUpload.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:8000/detect/", {
        method: "POST",
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error("Error from server:", data.error);
                countUpload.innerText = "Error during detection.";
                return;
            }

            const count = data.count ?? 0;
            countUpload.innerText = `Palm trees detected: ${count}`;

            if (data.image) {
                resultImgUpload.src = `data:image/jpeg;base64,${data.image}`;
            } else {
                resultImgUpload.alt = "No image received";
                console.warn("No image field in response.");
            }
        })
        .catch(err => {
            console.error("Error sending image:", err);
            countUpload.innerText = "Error connecting to backend.";
        });
});

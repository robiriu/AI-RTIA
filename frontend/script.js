function startCamera() {
    const video = document.getElementById('webcam');
    const snapBtn = document.getElementById('snapBtn');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.style.display = 'block';
            snapBtn.style.display = 'inline-block';
        });
}

function captureImage() {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('file', blob, 'webcam.jpg');

        fetch('http://127.0.0.1:8000/detect/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result-img-webcam').src = "data:image/jpeg;base64," + data.image;
                document.getElementById('count-webcam').innerText = `Palm trees detected: ${data.count}`;
            });
    }, 'image/jpeg');
}

function uploadImage(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:8000/detect/', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result-img-upload').src = "data:image/jpeg;base64," + data.image;
            document.getElementById('count-upload').innerText = `Palm trees detected: ${data.count}`;
        });
}

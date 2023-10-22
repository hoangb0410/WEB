document.getElementById("FileUpload1").onchange = function () {
    let preview = document.querySelector("img.preview");
    let canvas = document.querySelector("canvas.target");
    let file = this.files[0];		
    let reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;				
        preview.classList.remove("nodisplay");
        setTimeout(function() {
            canvas.width = preview.clientWidth;
            canvas.height = preview.clientHeight;
            let cvContext = canvas.getContext("2d");
            cvContext.drawImage(preview, 0, 0, canvas.width, canvas.height);
            let worker = new SharedWorker("imgproc.js");// chuyen sang shared worker
            worker.port.onmessage = function (e) { // chuyen sang
                cvContext.putImageData(new ImageData(e.data, canvas.width, canvas.height), 0, 0);
                canvas.classList.remove("nodisplay");
            };
            let imgData = cvContext.getImageData(0, 0, canvas.width, canvas.height);
            let pixels = imgData.data;
            worker.port.postMessage(pixels); // chuyen sang 
        }, 100);
    };
    // Đọc tệp
    if (file) reader.readAsDataURL(file);
};
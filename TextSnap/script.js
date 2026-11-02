document.getElementById("convert").addEventListener("click", function () {
    var input_image = document.getElementById("input_image");
    var output = document.getElementById("output");

    var image_file = input_image.files[0];

    if (!image_file) {
        output.innerHTML = "please select an image files."
        return;
    }

    Tesseract.recognize(
        image_file,
        "eng"
    ).then(function ({ data }) {
        output.innerHTML = data.text;
    }).catch(function (error) {
        console.error("error", error);
        output.innerHTML = "error";
    })
});
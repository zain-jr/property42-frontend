function previewFile(file, target) {
  var preview = document.querySelector(target);
  console.log(target);
  console.log(preview);
  var file    = file.files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
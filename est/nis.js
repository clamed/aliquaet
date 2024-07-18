const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Assuming `imageData` is an ImageData object obtained or created earlier
context.putImageData(imageData, 0, 0);

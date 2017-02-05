exports.resizeImage = function (w, h, maxWidth = 600, maxHeight = 600) {
  let sw = w;
  let sh = h;
  let aspect = w / h;
  if (sw > 600) {
    sw = 600;
    sh = ~~(sw / aspect);
  }
  if (sh > 600) {
    aspect = w / h;
    sh = 600;
    sw = ~~(sh * aspect);
  }
  return {sw, sh};
};
exports.toImg = function(encodedData) {
  const imgElement = document.createElement('img');
  imgElement.src = encodedData;
  return imgElement;
};

exports.toPng = function(canvas) {
  const img = document.createElement('img');
  img.src = canvas.toDataURL('image/png');
  return img;
};


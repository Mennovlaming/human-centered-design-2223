const video = document.getElementById('myVideo');
const ondertiteling = document.getElementById('ondertiteling');

video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  // Loop door alle ondertitelings-p-elementen en toon / verberg ze op basis van de huidige tijd
  for (let i = 0; i < ondertiteling.children.length; i++) {
    const ondertitel = ondertiteling.children[i];
  

    const start = parseFloat(ondertitel.getAttribute('data-start'));
    const end = parseFloat(ondertitel.getAttribute('data-end'));
    if (currentTime >= start && currentTime < end) {
      ondertitel.style.display = 'block';
    } else {
      ondertitel.style.display = 'none';
    }
  }
});
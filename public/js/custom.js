document.addEventListener('DOMContentLoaded', function () {
    var cursor = document.querySelector('.blob');
  
    if (cursor) {
      document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      });
    } else {
      console.error('Element with class "blob" not found.');
    }
  });
  
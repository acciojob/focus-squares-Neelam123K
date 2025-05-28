//your JS code here. If required.
const squares = document.querySelectorAll('.square');
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2'); 
const square3 = document.getElementById('square3');

const originalColor = square1.style.backgroundColor;

squares.forEach(function(sqr) {
  sqr.addEventListener('mouseover', (e) => {
    if (e.target.id === 'square1') {
      square2.style.backgroundColor = '#6F4E37';
      square3.style.backgroundColor = '#6F4E37';
    }else if (e.target.id === 'square2') {
      square1.style.backgroundColor = '#6F4E37';
      square3.style.backgroundColor = '#6F4E37';
    } else if (e.target.id === 'square3') {
      square1.style.backgroundColor = '#6F4E37';
      square2.style.backgroundColor = '#6F4E37';
    }
  });

  sqr.addEventListener('mouseout', (e) => {
    if (e.target.id === 'square1') {
      square2.style.backgroundColor = originalColor;
      square3.style.backgroundColor = originalColor;
    }else if (e.target.id === 'square2') {
      square1.style.backgroundColor = originalColor;
      square3.style.backgroundColor = originalColor;
    } else if (e.target.id === 'square3') {
      square1.style.backgroundColor = originalColor;
      square2.style.backgroundColor = originalColor;
    }
  });
});
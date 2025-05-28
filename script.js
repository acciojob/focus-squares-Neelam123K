//your JS code here. If required.
const squares = document.querySelectorAll("square")

squares.forEach((square, index) => {
	square.addEventListener('mouseenter', () => {
		squares.forEach((other, i) => {
			if(i !== index) {
				other.style.backgroundColor = '#6F4E37'
			}
		})
	})

	square.addEventListener('mouselevel', () => {
		squares.forEach(other => {
			other.style.backgroundColor = '#E6E6FA'
		})
	})
})
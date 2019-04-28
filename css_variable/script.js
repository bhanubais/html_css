// get the inputs
const inputs = [].slice.call(document.querySelectorAll('.controls input'));

// listen for changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
	// append units
	let suffix = '';
	if (this.id === 'size') {
		suffix = 'px';
	}else if (this.id === 'radius') {
		suffix = '%';
	}

	document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

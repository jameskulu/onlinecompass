export function wireSlider(input, slider, min, max) {
	const sync = () => {
		const v = parseFloat(input.value);
		if (!Number.isNaN(v)) {
			slider.value = String(Math.min(max, Math.max(min, v)));
		}
	};
	slider.addEventListener('input', () => {
		input.value = parseFloat(slider.value).toFixed(2);
		input.dispatchEvent(new Event('input', { bubbles: true }));
	});
	input.addEventListener('input', sync);
	input.addEventListener('change', sync);
	return sync;
}

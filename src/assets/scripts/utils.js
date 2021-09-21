export function getCoords($el) {
	const rect = $el.getBoundingClientRect()

	return {
		left: pageXOffset + rect.left,
		top: pageYOffset + rect.top,
	}
}
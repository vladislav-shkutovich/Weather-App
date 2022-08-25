const font = 'sans-serif'

const boxShadows = [
	'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const screenSizes = {
	xs: 550,
	small: 768,
	medium: 992,
	large: 1200,
}

const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72, 80]

// Color palette

const black = '#000000'
const white = '#ffffff'
const error = '#bd3636'
const primary = '#9cff1b'
const secondary = '#c5ff68'
const secondaryLight = '#e8ffc3'
const background = '#f7ffe7'

// const black = '#b4c4d5'
// const white = '#171d1f'
// const error = '#bd3636'
// const primary = '#171d1f'
// const secondary = '#252a2c'
// const secondaryLight = '#2b2e30'
// const background = '#39393a'

// const black = '#000000'
// const white = '#ffffff'
// const error = '#bd3636'
// const primary = '#a575f1'
// const secondary = '#a697ff'
// const secondaryLight = '#d2caff'
// const background = '#e5e1ff'

export default {
	font,
	boxShadows,
	screenSizes,
	fontSizes,
	colors: {
		primary,
		secondary,
		secondaryLight,
		black,
		white,
		error,
		background,
	},
}

const font = 'sans-serif'

const boxShadows = [
	'0rem 1.5rem 4rem rgba(0,0,0,0.7)',
	'0rem 1rem 3rem rgba(0,0,0,0.5)',
	'0rem 0rem 3rem rgba(0,0,0,0.3)',
]

const breakpoints = {
	xxs: '460px',
	xs: '520px',
	small: '660px',
	medium: '760px',
	large: '900px',
}

const margins = [0.2, 0.5, 1, 1.5, 2, 3, 4, 5]

const paddings = [0.2, 0.5, 0.8, 1.0, 1.5, 2, 3, 4]

const fontSizes = {
	xxsmall: 0.8,
	xsmall: 1.0,
	small: 1.2,
	medium: 1.4,
	regular: 1.6,
	large: 1.8,
	temperatureWeekly: 2.2,
	citySizeMedia: 2.6,
	xlarge: 3.6,
	temperature: 4.0,
	xxlarge: 4.8,
}

// * Color palettes

const error = '#bd3636'

// * Dark theme
const black = '#b4c4d5'
const white = '#171d1f'

// * Light theme
// const black = '#171d1f'
// const white = '#b4c4d5'

// ? Green
// const primary = '#9cff1b'
// const secondary = '#c5ff68'
// const secondaryLight = '#e8ffc3'
// const background = '#f7ffe7'

// ? Blue
// const primary = '#2b87ff'
// const secondary = '#76b1ff'
// const secondaryLight = '#d7e9ff'
// const background = '#f2f8ff'

// ? Violet
// const primary = '#a575f1'
// const secondary = '#a697ff'
// const secondaryLight = '#d2caff'
// const background = '#e5e1ff'

// ? Black
const primary = '#171d1f'
const secondary = '#252a2c'
const secondaryLight = '#2b2e30'
const background = '#39393a'

const backgroundImage = 'rgb(57, 57, 58, 0.8)'
const backgroundImageSecondary = 'rgb(43, 46, 48, 0.8)'

// * Highligthes

// const highlight = '#c69963'
// const highlightSecondary = '#6d5d4b'

const highlight = '#db324d'
const highlightSecondary = '#a62639'

// const highlight = '#63d471'
// const highlightSecondary = '#4e7d55'

// const highlight = '#064789'
// const highlightSecondary = '#427aa1'

export default {
	font,
	boxShadows,
	breakpoints,
	margins,
	paddings,
	fontSizes,
	colors: {
		primary,
		secondary,
		secondaryLight,
		black,
		white,
		error,
		background,
		backgroundImage,
		backgroundImageSecondary,
		highlight,
		highlightSecondary,
	},
}

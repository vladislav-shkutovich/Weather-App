const font = 'sans-serif'

const boxShadows = [
	'0rem 1.5rem 4rem rgba(0,0,0,0.7)',
	'0rem 1rem 3rem rgba(0,0,0,0.5)',
	'0rem 0rem 3rem rgba(0,0,0,0.3)',
]

const breakpoints = {
	xxxs: '420px',
	xxs: '460px',
	xs: '520px',
	small: '660px',
	medium: '760px',
	large: '900px',
}

const margins = [0.2, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 7]

const paddings = [0.2, 0.5, 0.8, 1.0, 1.5, 2, 3, 4]

const fontSizes = {
	xxsmall: 0.8,
	xsmall: 1.0,
	small: 1.2,
	smallButtons: 1.3,
	medium: 1.4,
	regular: 1.6,
	large: 1.8,
	temperatureWeekly: 2.2,
	citySizeMedia: 2.0,
	clocksTimeMedia: 3.2,
	xlarge: 3.0,
	temperature: 4.0,
	xxlarge: 4.8,
}

const error = '#bd3636'
const black = '#b4c4d5'
const white = '#171d1f'

const primary = '#171d1f'
const primaryLighter = '#1d2325'
const secondary = '#252a2c'
const secondaryLight = '#2b2e30'
const background = '#39393a'
const backgroundImage = 'rgb(57, 57, 58, 0.7)'
const backgroundImageSecondary = 'rgb(43, 46, 48, 0.7)'

const highlight = '#107e54'
const highlightSecondary = '#0c4230'
const highlightRed = '#7e1023'
const highlightRedSecondary = '#420c0c'

export default {
	font,
	boxShadows,
	breakpoints,
	margins,
	paddings,
	fontSizes,
	colors: {
		primary,
		primaryLighter,
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
		highlightRed,
		highlightRedSecondary,
	},
}

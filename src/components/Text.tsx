import React from 'react';
import { colors, fonts, textSizes } from 'src/utils/constants';
import { createText } from 'react-native-ts-aprakoso98';

const _Text = createText({
	colors, fonts, sizes: textSizes,
	defaultColor: 'dark',
	// defaultFont: 'Default',
	defaultSize: 't_default'
})

const Text = (props: GetProps<typeof _Text>) => {
	const { font, ...rest } = props
	return _Text(rest)
}

export const TextGrey = (props: GetProps<typeof Text>) => {
	const { color, ...rest } = props
	return <Text font="SemiBold" color="darkGrey" {...rest} />
}

export const TextTitle = (props: GetProps<typeof Text>) => {
	const { font, size, ...rest } = props
	return <Text font="SemiBold" size="t_title" {...rest} />
}

export const TextSemi = (props: GetProps<typeof Text>) => {
	const { font, ...rest } = props
	return <Text font="SemiBold" {...rest} />
}

export const TextUnder = (props: GetProps<typeof Text>) => {
	const { style, ...rest } = props
	return <Text style={{
		textDecorationLine: 'underline',
		...style
	}} {...rest} />
}

export const TextPlaceholder = (props: GetProps<typeof Text>) => {
	return <Text color="darkGrey" {...props} />
}

export const TextBig = (props: GetProps<typeof Text>) => {
	const { font, size, ...rest } = props
	return <Text font="SemiBold" size="t_big" {...rest} />
}

export const TextSmall = (props: GetProps<typeof Text>) => {
	const { size, ...rest } = props
	return <Text size="t_placeholder" {...rest} />
}

export default Text
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../theme'
import { AppTextBold } from './AppTextBold'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={{ ...styles.button, backgroundColor: color }}>
			<AppTextBold style={styles.text}>{children}</AppTextBold>
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff'
	}
})

import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, TextInput, View } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({
	visible, onCancel, value, onSave,
}) => {
	const [title, setTitle] = useState(value)
	const saveHandler = () => {
		if (title.trim().length < 3) {
			Alert.alert(
				'Error!',
				`Minimum 3 letters allowed. You mentioned ${
					title.trim().length
				} letters`,
			)
		} else {
			onSave(title)
		}
	}
	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={styles.input}
					placeholder="Type a name"
					autoCapitalize="none"
					autoCorrect={false}
					maxLength={64}
				/>
				<View style={styles.buttons}>
					<AppButton
						onPress={onCancel}
						color={THEME.DANGER_COLOR}
					>Cancel</AppButton>
					<AppButton onPress={saveHandler}>Save</AppButton>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 2,
		width: '80%',
	},
	buttons: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

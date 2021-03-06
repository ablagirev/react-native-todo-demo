import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('Название не может быть пустым')
		}
	}
	
	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Введите название дела"
				autoCorrect={false}
				autoCapitalize="none"
			/>
			<AntDesign.Button onPress={pressHandler} name="pluscircleo">
				Добавить
			</AntDesign.Button>
			{/* <Button title="add to do" onPress={pressHandler} /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '60%',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: THEME.MAIN_COLOR,
	},
})

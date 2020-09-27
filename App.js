import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { NavBar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

async function loadFontsAsync() {
	await Font.loadAsync({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	})
}

export default function App() {
	const [todoId, setTodoId] = useState(null)
	const [todos, setTodos] = useState([])
	const [isFontsLoaded, setIsFontsLoaded] = useState(false)

	if (!isFontsLoaded) {
		return (
			<AppLoading
				startAsync={loadFontsAsync}
				// eslint-disable-next-line no-console
				onError={(err) => console.error(err)}
				onFinish={() => setIsFontsLoaded(true)}
			/>
		)
	}

	const addTodo = (title) => {
		setTodos((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				title,
			},
		])
	}

	const removeTodo = (id) => {
		const todo = todos.find((t) => t.id === id)
		Alert.alert(
			'Items deletion',
			`Are u sure to delete element ${todo.title}?`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
						setTodoId(null)
						// eslint-disable-next-line no-shadow
						setTodos((prev) => prev.filter((todo) => todo.id !== id))
					},
				},
			],
			{ cancelable: false },
		)
	}

	const updateTodo = (id, title) => {
		setTodos((old) => old.map((todo) => {
			if (todo.id === id) {
				// eslint-disable-next-line no-param-reassign
				todo.title = title
			}
			return todo
		}))
	}

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={setTodoId}
		/>
	)

	if (todoId) {
		const selectedTodo = todos.find((todo) => todo.id === todoId)
		content = (
			<TodoScreen
				goBack={() => setTodoId(null)}
				todo={selectedTodo}
				onRemove={removeTodo}
				onSave={updateTodo}
			/>
		)
	}

	return (
		<View>
			<NavBar title="Application" />
			<View style={styles.container}>{content}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})

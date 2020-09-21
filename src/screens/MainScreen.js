import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/ToDo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  console.log(addTodo);
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { TODOS } from "../constants/Utils";
import TodoItems from "../components/TodoItems";
import { Header } from "react-navigation";

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      toDoList: TODOS
    };
  }

  onChangeText = text => {
    this.setState({
      inputText: text
    });
  };

  onPressSubmit = () => {
    const newToDoItem = {
      body: this.state.inputText,
      status: "Active",
      id: this.state.toDoList.length + 1
    };
    const newToDoList = [...this.state.toDoList, newToDoItem];
    this.setState({
      toDoList: newToDoList,
      inputText: ""
    });
  };

  onPressToDoItem = id => {
    const { toDoList } = this.state;
    const todo = toDoList.find(todo => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = toDoList.findIndex(todo => todo.id === id);
    //alert(foundIndex); chỉ số mảng bắt đầu từ 0
    toDoList[foundIndex] = todo;
    const newToDoList = [...toDoList];
    this.setState(
      {
        toDoList: newToDoList
      },
      () => {
        setTimeout(() => {
          this.props.navigation.navigate("TodoDetail", { data: todo });
        }, 500);
      }
    );
  };

  onConfirmDelete = id => {
    const newTodoList = this.state.toDoList.filter(todo => todo.id !== id);
    this.setState({
      toDoList: newTodoList
    });
  };

  onLongPressToDoItem = todo => {
    Alert.alert(
      "Delete your todo?",
      todo.body,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.onConfirmDelete(todo) }
      ],
      { cancelable: true }
    );
  };

  render() {
    const { toDoList, inputText } = this.state;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 50}
        behavior="padding"
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            {toDoList.map((item, index) => {
              return (
                <TodoItems
                  data={item}
                  key={index}
                  onPressButton={() => this.onPressToDoItem(item.id)}
                  onLongPressButton={() => this.onLongPressToDoItem(item.id)}
                />
              );
            })}
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeText}
              value={inputText}
            />
            <Button title="Submit" onPress={this.onPressSubmit} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 15
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    marginVertical: 15
  }
});

import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class TodoItems extends Component {
  render() {
    const {
      data: { body, status }, onPressButton, onLongPressButton
    } = this.props;
    const buttonStyle =
      status === "Active" ? styles.activeButton : styles.normalButton;
    return (
      <TouchableOpacity 
      style={buttonStyle} 
      onPress={onPressButton}
      onLongPress={onLongPressButton}
      >
        <Text style={styles.text}>{body}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  normalButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10
  },
  activeButton: {
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  }
});

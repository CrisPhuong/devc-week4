import React from "react";
import { createStackNavigator } from "react-navigation";
import TodoScreen from "../screens/TodoScreen";
import TabBarIcon from "../components/TabBarIcon";
import { Platform } from "react-native";
import TodoDetailScreen from "../screens/TodoDetailScreen";

const TodoStack = createStackNavigator({
  Todo: TodoScreen,
  TodoDetail: TodoDetailScreen
});

TodoStack.navigationOptions = {
  tabBarLabel: "Todo List",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default TodoStack;

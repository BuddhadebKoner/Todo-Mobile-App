import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
  Linking,
} from "react-native";
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback.js';

const TodoScreen = () => {
  // tod state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  // handel add todo
  handelAddTodo = () => {
    if (todo.length > 0) {
      setTodoList([...todoList, { id: todoList.length + 1, title: todo }]);
      setTodo("");
    } else {
      alert("Please Enter Todo");
    }
  }
  // handel delete todo
  handelDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }
  // handel edit todo
  const hadelEdit = (id) => {
    const todoItem = todoList.find((item) => item.id === id);
    if (todoItem) {
      setTodo(todoItem.title); // Sets the todo input to the selected item's title for editing
      const updatedTodoList = todoList.filter((item) => item.id !== id); // Remove the selected todo for editing
      setTodoList(updatedTodoList);
    }
  }


  const renderTodos = ({ item }) => {
    return (
      <View style={styles.todos}>
        <Text style={styles.todosFont}>{item.id}. {item.title}</Text>
        <IconButton
          icon="pencil"
          iconColor="#000000"
          onPress={() => hadelEdit(item.id)}
        />
        <IconButton
          style={styles.iconRight}
          icon="trash-can"
          iconColor="#d9534f"
          onPress={() => handelDelete(item.id)}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What To-Do !</Text>
      <TextInput
        placeholder="Add Todo"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={todo}
        onChangeText={(userText) => {
          setTodo(userText);
        }}
      />
      <Pressable style={({ pressed }) => [
        styles.AddBtn,
        { transform: pressed ? [{ scale: 0.98 }] : [{ scale: 1 }] }
      ]}
        onPress={() => handelAddTodo()}
      >
        <Text style={styles.AddBtnText}>Add Todo</Text>
      </Pressable>
      <View style={styles.todosBox}>
        <FlatList data={todoList} renderItem={renderTodos} />
      </View>
      {
        todoList.length === 0 && <Fallback />
      }
      <View style={styles.fllowOnGithub}>
        <Text
          style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}
          onPress={() => Linking.openURL('https://github.com/BuddhadebKoner')}
        >
          Follow Me On Github
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
    paddingTop: 70,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  AddBtn: {
    backgroundColor: '#000000',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
  AddBtnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  todosBox: {
    flex: 1,
    marginTop: 20,
  },
  todos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  todosFont: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  fllowOnGithub: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#000000',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});

export default TodoScreen;

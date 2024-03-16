import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "other" , timestamp: "9:00 AM"},
    { text: "How can I have you?", sender: "other", timestamp: "9:01 AM"},
  ]);
  const [sender, setSender] = useState("me"); // add new state variable

  const sendMessage = () => {
    if (message.trim() !== "") {
      const timestamp = new Date().toLocaleTimeString();
      setMessages([...messages, { text: message, timestamp, sender }]);
      setMessage("");
      setSender("me"); // reset sender to "me"
    }
  };

  const renderMessage = (msg, index) => {
    const isMe = msg.sender === "me";
    return (
      <View
        key={index}
        style={[styles.message, isMe ? styles.me : styles.other]}
      >
        <Text style={styles.messageText}>{msg.text}</Text>
        <Text style={styles.timestamp}>{msg.timestamp}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map(renderMessage)}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 90,
    paddingTop: 40,
  },
  messagesContainer: {
    flex: 1.2,
  },
  message: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    maxWidth: "80%",
  },
  me: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C5",
  },
  other: {
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: "#aaa",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: COLORS.red,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sendButtonText: {
    color: "#fff",
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
});

export default Chat;

import React, { useState, useEffect } from "react";

const HooksAtAGlance = () => (
  <>
    <Example></Example>
    <ExampleWithManyStates></ExampleWithManyStates>
    <FriendStatus friend={{ id: 1 }}></FriendStatus>
    <FriendListItem friend={{ id: 1, name: "Ankita" }}></FriendListItem>
  </>
);

const Example = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const ExampleWithManyStates = () => {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn hooks" }]);

  const handleAgeChange = e => setAge(e.target.value);
  const handleFruitChange = e => setFruit(e.target.value);
  const handleTodosChange = e => setTodos([{ text: e.target.value }]);

  return (
    <>
      <input type="text" value={age} onChange={handleAgeChange} />
      <input type="text" value={fruit} onChange={handleFruitChange} />
      <input type="text" value={todos[0].text} onChange={handleTodosChange} />
    </>
  );
};

const ChatAPI = {
  subscribeToFriendStatus() {},
  unsubscribeFromFriendStatus() {}
};

const useFriendStatus = friendID => {
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = status => setIsOnline(status.isOnline);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () =>
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
  });

  return isOnline;
};

const FriendStatus = ({ friend }) => {
  const isOnline = useFriendStatus(friend.id);

  if (isOnline === null) return "Loading...";
  return isOnline ? "Online" : "Offline";
};

const FriendListItem = ({ friend }) => {
  const isOnline = useFriendStatus(friend.id);

  return <li style={{ color: isOnline ? "green" : "black" }}>{friend.name}</li>;
};

export default HooksAtAGlance;

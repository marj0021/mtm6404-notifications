import React, { useState } from 'react';
import Header from "./components/Header.jsx";
import NotificationContainer from "./components/NotificationContainer.jsx";

import data from './notifications.js';
import './App.css';

function App() {
  const [notification, setNotification] = useState(data);

  function remove(id) {
    setNotification(arr => arr.filter(el => el.id !== id));
  }

  function clear() {
    setNotification([]);
  }

  return (
    <>
      <Header count={notification.length} />
      <NotificationContainer prop={notification} remove={remove} />
      <button onClick={clear} disabled={notification.length === 0}>Delete all</button>
    </>
  );
}

export default App;

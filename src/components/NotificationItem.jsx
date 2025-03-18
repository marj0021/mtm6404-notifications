import React from 'react';

const NotificationItem = ({ notification, remove }) => {
  return (
    <div className="notification-item">
      <p><strong>{notification.name}</strong>: {notification.message}</p>
      <button onClick={() => remove(notification.id)}>Clear</button>
    </div>
  );
};

export default NotificationItem;

import React from 'react';
import NotificationItem from './NotificationItem.jsx';

const NotificationContainer = ({ prop, remove }) => {
  return (
    <div className="notification-container">
      {prop.map(notification => (
        <NotificationItem key={notification.id} notification={notification} remove={remove} />
      ))}
    </div>
  );
};

export default NotificationContainer;

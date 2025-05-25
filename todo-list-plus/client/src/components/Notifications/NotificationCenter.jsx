import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Example: subscribe to notification events or fetch notifications
    // For demo, add a sample notification after 2 seconds
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: 'Task created successfully!', type: 'success' },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {notifications.map(({ id, message, type }) => (
        <div
          key={id}
          className={`max-w-xs px-4 py-2 rounded shadow-lg text-white cursor-pointer ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
          onClick={() => removeNotification(id)}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;

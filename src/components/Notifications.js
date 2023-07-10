import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "../styles/Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const snapshot = await firestore.collection("notifications").get();
        const notificationList = snapshot.docs.map((doc) => doc.data());
        setNotifications(notificationList);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map(
          (notification, index) =>
            notification &&
            notification.message && (
              <div key={index} className="notification">
                <p>{notification.message}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Notifications;

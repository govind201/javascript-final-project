import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import Ironman from "../images/ironman.jpg";

import "../styles/Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const snapshot = await firestore
          .collection("users")
          .where("username", "==", "ironman")
          .get();
        const userProfile = snapshot.docs.map((doc) => doc.data())[0];
        setProfile(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {profile && (
        <div className="profile-details">
          <div className="profile-avatar pointer-cursor">
            <img src={Ironman} alt="Profile Avatar" />
          </div>
          <div className="profile-info">
            <h3>{profile.displayName}</h3>
            <p>{profile.bio}</p>
            <div className="profile-counts">
              <div className="followers">
                <span className="count">{profile.followerCount}</span> Followers
              </div>
              <div className="following">
                <span className="count">{profile.followingCount}</span>{" "}
                Following
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

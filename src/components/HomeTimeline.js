import AvengersAssembleImage from "../images/avengers-assemble.jpg";
import AvengersFightImageImage from "../images/avengers-fight.jpg";
import AvengerPosterImage from "../images/avengers-poster.jpg";
import CaptainAmerica from "../images/captain-america.jpg";
import IronMan from "../images/ironman.jpg";
import TwitterVerifiedBadge from "../images/twitter-verified-badge.svg";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "../styles/HomeTimeline.css";

const images = [
  AvengersAssembleImage,
  AvengersFightImageImage,
  AvengerPosterImage,
  CaptainAmerica,
  IronMan,
];

const HomeTimeline = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const snapshot = await firestore
          .collection("user-tweets")
          .limit(5)
          .get();
        const tweetList = snapshot.docs.map((doc) => doc.data());
        setTweets(tweetList);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="home-timeline">
      <h2>Home Timeline</h2>
      {tweets &&
        tweets.map((tweet, index) => (
          <div key={index} className="tweet">
            <div className="tweet-header pointer-cursor">
              <div className="tweet-avatar">
                <img src={IronMan} alt="User Avatar" />
              </div>
              <div className="tweet-info">
                <span className="username">{tweet.data.user.username}</span>
                {tweet.data.user.verified && (
                  <img
                    src={TwitterVerifiedBadge}
                    className="verified"
                    alt="twitter-logo"
                  />
                )}
                <span className="handle">{tweet.data.user.handle}</span>
              </div>
            </div>
            <div className="tweet-content">
              <p>{tweet.data.content.text}</p>
              {tweet.data.content && (
                <img src={`${images[index]}`} alt="Tweet img" />
              )}
            </div>
            <div className="engagement">
              <div className="engagement-item likes">
                <span className="count">{tweet.data.engagement.likes}</span>
                <span className="label">Likes</span>
              </div>
              <div className="engagement-item retweets">
                <span className="count">{tweet.data.engagement.retweets}</span>
                <span className="label">Retweets</span>
              </div>
              <div className="engagement-item replies">
                <span className="count">{tweet.data.engagement.replies}</span>
                <span className="label">Replies</span>
              </div>
              <div className="engagement-item shares">
                <span className="count">{tweet.data.engagement.shares}</span>
                <span className="label">Shares</span>
              </div>
              <span className="timestamp">{tweet.data.user.timestamp}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeTimeline;

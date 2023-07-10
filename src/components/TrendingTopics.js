import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "../styles/TrendingTopics.css";

const TrendingTopics = () => {
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      try {
        const snapshot = await firestore.collection("trendingTopics").get();
        const trendingTopicsList = snapshot.docs.map((doc) => doc.data());
        setTrendingTopics(trendingTopicsList);
      } catch (error) {
        console.error("Error fetching trending topics:", error);
      }
    };

    fetchTrendingTopics();
  }, []);

  return (
    <div className="trending-topics-container">
      <h2 className="trending-topics-heading">Trending Topics</h2>
      <ul className="trending-topics-list">
        {trendingTopics.map((topic, index) => (
          <li key={index} className="trending-topic">
            <span className="trending-topic-link">
              <span className="pointer-cursor trending-topic-hashtag">#{topic.name}</span>
              <span className="trending-topic-description">
                {topic.tweetCount}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;

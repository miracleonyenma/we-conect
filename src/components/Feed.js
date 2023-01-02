import { useEffect } from "react";
import Share from "../components/Share";
import "../styles/feed.css";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "0001",
      profileImg: "/assets/profile.jpg",
      postedTime: "21hrs",
      image: "/assets/postpic1.jpg",
      name: "Tzuyu",
      text: "andfanf ansdfl anf lanfl anfln aldnfa lndf sd",
      comment: "Happy New Year all friends! #2023",
      likes: 2300,
      comments: 44,
      liked: true,
    },
    {
      id: "0002",
      profileImg: "/assets/profile.jpg",
      postedTime: "18hrs",
      image: "/assets/postpic(2).jpg",
      name: "Jennie",
      text: "Went on a hike today and the view was breathtaking!",
      comment: "Nature is the best therapy #hiking #nature",
      likes: 1500,
      comments: 32,
      liked: false,
    },
    {
      id: "0003",
      profileImg: "/assets/profile.jpg",
      postedTime: "2days",
      image: "/assets/postpic(5).jpg",
      name: "Jisoo",
      text: "Trying out a new recipe for dinner tonight! #cooking",
      comment: "",
      likes: 1200,
      comments: 15,
      liked: false,
    },
    {
      id: "0004",
      profileImg: "/assets/profile.jpg",
      postedTime: "3days",
      image: "/assets/postpic(1).jpg",
      name: "Lisa",
      text: "Just finished my morning workout #fitness #motivation",
      comment: "",
      likes: 900,
      comments: 8,
      liked: true,
    },
    {
      id: "0005",
      profileImg: "/assets/profile.jpg",
      postedTime: "5days",
      image: "/assets/postpic(4).jpg",
      name: "Rose",
      text: "Had the best time at the beach today! #beach #summer",
      comment: "",
      likes: 1000,
      comments: 12,
      liked: false,
    },
    {
      id: "0006",
      profileImg: "/assets/profile.jpg",
      postedTime: "1week",
      image: "/assets/postpic(3).jpg",
      name: "Jimin",
      text: "Just got back from my trip to Paris! #travel #paris",
      comment: "",
      likes: 1400,
      comments: 25,
      liked: true,
    },
  ];

  const removeFeedPadding = (feed, initialWindowHeight) => {
    if (
      window.innerHeight + 50 < initialWindowHeight &&
      window.innerWidth < 500
    ) {
      feed.style.paddingBottom = 0;
    }
  };

  useEffect(() => {
    const initialWindowHeight = window.innerHeight;
    const feed = document.getElementById("feedAlt");
    if ("visualViewport" in window) {
      window.visualViewport.addEventListener("resize", () =>
        removeFeedPadding(feed, initialWindowHeight)
      );
    }
    return () => {
      window.visualViewport.removeEventListener("resize", () =>
        removeFeedPadding(feed, initialWindowHeight)
      );
    };
  }, []);

  return (
    <div className="feed scrollbar-hidden" id="feedAlt">
      <Share />
      <div className="feed__wrapper">
        {posts.map((post) => (
          <Post
            key={post.id}
            profileImg={post.profileImg}
            postedTime={post.postedTime}
            image={post.image}
            name={post.name}
            text={post.text}
            comment={post.comment}
            likes={post.likes}
            comments={post.comments}
            liked={post.liked}
          />
        ))}
      </div>
    </div>
  );
}

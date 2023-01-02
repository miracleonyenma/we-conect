import "../styles/followCard.css";
import { Followers } from "../Data/FollowersData";
import { useState } from "react";
import { formatNumber } from "../modules/formatNumber";

const FollowCard = ({ pathname }) => {
  const [selected, setSelected] = useState(pathname || "followers");

  return (
    <div className="followCard__cont">
      <div className="followCard">
        <div className="followCard__head">
          <span
            style={{
              // borderColor: `${
              //   selected === "followers" ? "rgb(228, 228, 228)" : "transparent"
              // }`,
              background: `${selected === "followers" ? "white" : "none"}`,
            }}
            onClick={() => setSelected("followers")}
          >
            Follwers
            <span className="tag">{formatNumber(6980)}</span>
          </span>
          <span
            style={{
              // borderColor: `${
              //   selected === "following" ? "rgb(228, 228, 228)" : "transparent"
              // }`,
              background: `${selected === "following" ? "white" : "none"}`,
            }}
            onClick={() => setSelected("following")}
          >
            Following
            <span className="tag">{formatNumber(1)}</span>
          </span>
        </div>
        {selected === "followers" ? (
          <div className="followCard__list scrollbar-hidden">
            {Followers.map((follower, id) => {
              return (
                <div className="followCard__follow" key={id}>
                  <div>
                    <img src={follower.img} alt="" className="followImage" />
                    <span>{follower.name}</span>
                  </div>
                  <span className="followCard__action">Follow</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="followCard__list scrollbar-hidden">
            {Followers.map((follower, id) => {
              return (
                <div className="followCard__follow" key={id}>
                  <div>
                    <img src={follower.img} alt="" className="followImage" />
                    <span>{follower.name}</span>
                  </div>
                  <span className="followCard__action">Unfollows</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowCard;

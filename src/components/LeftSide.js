import FollowersCard from "./FollowCard";
import MiniprofileCard from "./MiniProfileCard";
import "../styles/leftSide.css";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="leftSide__wrapper">
        <Link to="/" className="logo">
          <h1>weConect</h1>
        </Link>
        {/* <MiniprofileCard/> */}
        <ProfileCard
          name="Tammibriggs"
          coverImage="assets/profile.jpg"
          profileImage="assets/profile.jpg"
          bio="Software developer. I gat the skill and enthusiasm 💪🏼 | Technical writer with over 30 published articles | Currently working on creating my start-up."
          employmentStatus="Self-employed"
          country="Nigeria"
          relationship="Single"
          followers={30}
          following={20}
          showProfileBtn={true}
        />
        <FollowersCard />
      </div>
    </div>
  );
};

export default LeftSide;

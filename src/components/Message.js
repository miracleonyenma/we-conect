import {useState } from "react";
import { Followers } from "../Data/FollowersData";
import "../styles/message.css";
import { EmailOutlined, Search, KeyboardArrowLeft } from "@mui/icons-material";
import Chat from "./Chat";

export default function Message() {
  const [search, setSearch] = useState(false);
  const [chat, setChat] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="message__cont">
      <div className="message">
        {!search && !chat && (
          <div className="message__noMessage">
            <h3>Messages</h3>
            <img src="assets/taking.jpg" alt="taliking" />
            <button className="button" onClick={() => setSearch(true)}>
              Start a Conversation
            </button>
          </div>
        )}
        {search && !chat && (
          <div>
            <div className="message__searchContainer">
              <span onClick={() => setSearch(false)}>
                <KeyboardArrowLeft />
              </span>
              <div className="message__search">
                <Search />
                <input
                  placeholder="Find a chat pal"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            {Followers.map((follower, id) => {
              return (
                <div className="message__searchPal">
                  <div>
                    <img
                      src={follower.img}
                      alt=""
                      className="message__searchPalImage"
                    />
                    <span>{follower.name}</span>
                  </div>
                  <span onClick={() => setChat(true)}>
                    <EmailOutlined />
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {chat && (
          <Chat setChat={setChat} name="Some name" image="assets/img1.png" />
        )}
      </div>
    </div>
  );
}

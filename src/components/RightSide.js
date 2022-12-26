import "../styles/rightSide.css";
import Chat from "./Message";

const RightSide = ({setModalOpened}) => {
  return (
    <div className="rightSide">
      <div style={{position: 'sticky', top: 10}}>
        <Chat />
        <button className="button r-button" onClick={() => setModalOpened(true)}>
          Share
        </button>
      </div>
    </div>
  );
};

export default RightSide;

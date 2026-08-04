import ChatRobot from "/images/robot.png";
import ChatUser from "/images/user.png";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender }) => {
  return (
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" && <img src={ChatRobot} className="chat-message-profile" alt="Chatbot app robot icon." />}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={ChatUser} className="chat-message-profile" alt="Chatbot app user icon." />}
    </div>
  );
};

export default ChatMessage;

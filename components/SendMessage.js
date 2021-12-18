import { useState } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    //Of chain data
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    //ave the mesages under Messages in the db
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //The object was saved successfully
        },
        (error) => {
          //The save failed
          //   error is  aMoralis error code and message
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-0 bg-black opacity-80 px-6 py-4  max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        className="font-bold text-pink-500"
        onClick={sendMessage}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;

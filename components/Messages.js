import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
const MINS_DURATION = 30;
const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  //Remember this is case sensitive
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      // Only show chats that are older les than 30 mins
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MINS_DURATION * 60 * 1000)
        ),
    [],
    {
      //Realtime Listener
      live: true,
    }
  );
  console.log(data);
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: "auto", marginRight: "auto" }}
          variant="dark"
        />
      </div>
      <div className="space-y-10 p-4">
        {/* Each Message */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🚀</p>
      </div>
    </div>
  );
};

export default Messages;

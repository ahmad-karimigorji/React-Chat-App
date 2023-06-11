import { useEffect, useRef, useState } from "react";
import Message from "../component/Messege";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import SendMessageBox from "../component/SendMessageBox";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const lastElementRef = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      lastElementRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="h-full">
      <div className="h-full pb-[70px] pt-1">
        <div className="w-full flex flex-col flex-nowrap space-y-3 overflow-y-auto px-4 pr-6">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={lastElementRef} className=""></div>
        </div>
        <SendMessageBox />
      </div>
    </div>
  );
};

export default ChatRoom;

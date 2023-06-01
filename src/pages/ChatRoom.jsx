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
    <div>
      <div className="h-[calc(100vh-50px)] flex flex-col justify-between gap-y-1 pt-2">
        <div className="max-w-4xl flex-auto mx-auto w-full flex flex-col flex-nowrap gap-y-3 overflow-y-auto px-4 first:!mt-auto">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={lastElementRef} className="mt-1"></div>
        </div>
        <SendMessageBox />
      </div>
    </div>
  );
};

export default ChatRoom;

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const SendMessageBox = () => {
  const [textareaheight, setTextareaheight] = useState(1);
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleChange = (e) => {
    setValue(e.target.value);
    const height = e.target.scrollHeight;
    const rowHeight = 35;
    const trows = Math.ceil(height / rowHeight) - 1;

    if (trows && trows <= 3) setTextareaheight(trows);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setValue("");
      setTextareaheight(1);
      return;
    }
    const { displayName, uid, photoURL } = currentUser;
    try {
      await addDoc(collection(db, "messages"), {
        name: displayName,
        text: value,
        uid: uid,
        avatar: photoURL,
        createdAt: serverTimestamp(),
      });
      setValue("");
      setTextareaheight(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full fixed bottom-0">
      <div className="px-4 bg-base-100">
        <form onSubmit={handleForm} className="w-full flex items-end py-3">
          <textarea
            value={value}
            name=""
            id=""
            rows={textareaheight}
            onChange={handleChange}
            placeholder="type a message"
            className="resize-none flex-auto p-2 bg-base-200 rounded-sm text-gray-500 focus:outline-none placeholder:text-sm placeholder:text-base-content/60"
          ></textarea>
          <button
            type="submit"
            className="bg-base-200 rounded-sm text-primary ml-2 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMessageBox;

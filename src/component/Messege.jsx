import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  const { uid, text, name, avatar, createdAt } = message;

  //
  const date = createdAt
    ? new Date(createdAt.seconds * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : null;

  return (
    <div
      className={`flex items-end gap-x-2 max-w-[80%] ${
        currentUser.uid === uid ? "flex-row-reverse self-end" : ""
      }`}
    >
        {currentUser.uid !== uid && <img src={avatar} alt="profile" className="w-[32px] h-[32px] rounded-full" />}
      <div
        className={`flex flex-col flex-auto gap-y-0.5 ${
          currentUser.uid === uid ? "items-end" : ""
        }`}
      >
        <span
          className={`text-sm text-base-content/50 ml-1 ${
            currentUser.uid === uid ? "hidden" : ""
          }`}
        >
          {name}
        </span>
        <div
          className={`flex flex-col justify-between flex-auto relative rounded-md max-w-fit whitespace-pre-line before:absolute before:-bottom-0.5 before:w-3 before:h-3 ${
            currentUser.uid === uid
              ? "bg-neutral text-neutral-content rounded-br-none before:-right-3 before:rounded-bl-full before:shadow-[-5px_0px_0px_0px_#fff] before:shadow-neutral"
              : "bg-base-200 text-base-content rounded-bl-none before:-left-3 before:rounded-br-full before:shadow-[5px_0px_0px_0px_#fff] before:shadow-base-200"
          }`}
        >
          <p className="p-2 pb-1 break-all">{text}</p>
          <span className={`self-end px-1 pb-1 text-xs ${currentUser.uid === uid
              ? "text-neutral-content/50" : "text-base-content/50"} `}>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;

// content: var(--tw-content);
// bottom: -2px;
// left: -11px;
// height: 12px;
// width: 11px;
// border-bottom-right-radius: 100%;
// box-shadow: 5px 0px 0px 0px #235dbb;

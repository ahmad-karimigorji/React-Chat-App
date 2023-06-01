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
      <div className="flex justify-center items-center min-w-[32px] min-h-[32px] rounded-full overflow-hidden">
        <img src={avatar} alt="profile" className="w-[32px] h-[32px]" />
      </div>
      <div
        className={`flex flex-col flex-auto gap-y-0.5 ${
          currentUser.uid === uid ? "items-end" : ""
        }`}
      >
        <span
          className={`text-sm text-slate-800/75 ${
            currentUser.uid === uid ? "hidden" : ""
          }`}
        >
          {name}
        </span>
        <div
          className={`flex flex-col justify-between flex-auto relative rounded-md max-w-fit text-blue-500 whitespace-pre-line before:absolute before:-bottom-0.5 before:w-3 before:h-3 ${
            currentUser.uid === uid
              ? "bg-blue-100 rounded-br-none before:-right-3 before:rounded-bl-full before:shadow-[-5px_0px_0px_0px_#fff] before:shadow-blue-100"
              : "bg-blue-50 rounded-bl-none before:-left-3 before:rounded-br-full before:shadow-[5px_0px_0px_0px_#fff] before:shadow-blue-50"
          }`}
        >
          <p className="p-2 pb-1">{text}</p>
          <span className="self-end px-1 pb-1 text-xs text-slate-800/60">
            {date}
          </span>
        </div>
        {/* <div className="text-xs text-slate-800/60">Seen at 12:46</div> */}
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

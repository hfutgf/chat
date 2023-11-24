import Chat from "../components/screens/chats/Chat";
import ChatList from "../components/screens/chats/ChatList";
import CurrentUser from "../components/screens/chats/CurrentUser";

export default function Home() {
  return (
    <div className="grid " style={{ gridTemplateColumns: "1fr 3fr" }}>
      <div className="border-brCl border-r-[2px] p-[12px]">
        <CurrentUser />
        <ChatList />
      </div>
      <div className="p-[12px]">
        <Chat />
      </div>
    </div>
  );
}

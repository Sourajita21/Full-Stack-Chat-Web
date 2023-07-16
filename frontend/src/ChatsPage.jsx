import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='5e7eee1d-8d3b-42e4-b418-87a9650a74d9'
        username={props.user.username}

        secret={props.user.username}
        style={{height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;
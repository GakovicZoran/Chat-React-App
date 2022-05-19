import { Chat } from "./components/Chat";
import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { css } from "@emotion/css";

const appContainer = css`
  margin: auto;
  width: 50%;
  padding: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 200px;
`;

const App = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return <div className={appContainer}>{user ? <Chat /> : <SignIn />}</div>;
};

export default App;

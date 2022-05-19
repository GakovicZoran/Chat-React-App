import { getAuth } from "firebase/auth";
import { css } from "@emotion/css";

const signOutBtn = css`
  border: 1px solid white;
  padding: 5px;
  outline: 0;
  background-color: transparent;
  color: white;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #00ffbf;
    border: 1px solid #00ffbf;
  }
`;
export const SignOut = () => {
  const auth = getAuth();

  return (
    <div>
      <button className={signOutBtn} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;

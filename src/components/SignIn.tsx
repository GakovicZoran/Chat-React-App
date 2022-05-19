import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { css } from "@emotion/css";

const signInButton = css`
  padding: 30px;
  font-size: 20px;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;
`;

export const SignIn = () => {
  const auth = getAuth();
  const [authing, setAuthing] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div>
      <button
        className={signInButton}
        onClick={() => signInWithGoogle()}
        disabled={authing}
      >
        Sign In With Google
      </button>
    </div>
  );
};

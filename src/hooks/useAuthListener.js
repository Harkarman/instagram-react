import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // Store the user in localStorage, if authUser exists.
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // Clear local storage if there is no authUser.
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);
  return { user };
}

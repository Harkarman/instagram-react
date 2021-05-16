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
        // If authUser, store in localStorage
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // Clear the localstorage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);
  return { user };
}

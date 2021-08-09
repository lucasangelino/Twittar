import { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase/client";
export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
    return () => {};
  }, []);

  return user;
}

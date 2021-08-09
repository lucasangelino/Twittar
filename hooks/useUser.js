import { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase/client";
import { useRouter } from "next/router";
export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
    return () => {};
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
    return () => {};
  }, [user]);
  // TODO: Create and export method to get if user is logged in or not
  return user;
}

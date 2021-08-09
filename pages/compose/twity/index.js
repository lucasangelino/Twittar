import { useState } from "react";
import AppLayout from "../../../components/applayout";
import Button from "../../../components/button/";
import useUser from "../../../hooks/useUser";
import { addTwity } from "../../../firebase/client";

export default function ComposeTwity() {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTwity({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username,
    });
  };

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="¿Que esta pasando?" onChange={handleChange}>
            {user}
          </textarea>

          <Button disabled={!message.length}>Twit</Button>
        </form>
        <style jsx>
          {`
            div {
              padding: 15px;
            }
            textarea {
              border: 0;
              font-size: 1.2rem;
              width: 100%;
              resize: none;
              padding: 15px;
              outline: none;
              min-height: 200px;
            }
          `}
        </style>
      </AppLayout>
    </>
  );
}

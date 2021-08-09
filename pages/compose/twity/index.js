import { useState } from "react";
import AppLayout from "../../../components/applayout";
import Button from "../../../components/button/";
import useUser from "../../../hooks/useUser";
import { addTwity } from "../../../firebase/client";
import router from "next/router";

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeTwity() {
  const user = useUser();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const isButtonDisabled = status === COMPOSE_STATES.LOADING || !message.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);
    addTwity({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username,
    })
      .then(() => router.push(`/home`))
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="¿Que esta pasando?" onChange={handleChange}>
            {user}
          </textarea>

          <Button disabled={isButtonDisabled}>Twit</Button>
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

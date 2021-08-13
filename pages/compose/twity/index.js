import { useState } from "react";
import AppLayout from "../../../components/applayout";
import Button from "../../../components/button/";
import useUser from "../../../hooks/useUser";
import { addTwity } from "../../../firebase/client";
import router from "next/router";
import Head from "next/head";

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeTwity() {
  const user = useUser();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW);

  // Handle drag and drop image
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  const isButtonDisabled = status === COMPOSE_STATES.LOADING || !message.length;

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

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

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  return (
    <>
      <AppLayout>
        <Head>
          <title>Twity / Create Twity</title>
          <meta
            name="description"
            content="Twity is a simple, fast and free site to share MEMEs"
          />
        </Head>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué está pasando?"
            onChange={handleChange}
            value={message}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {user}
          </textarea>

          <Button disabled={isButtonDisabled}>Twit</Button>
        </form>
        <style jsx>
          {`
            div {
              padding: 15px;
            }

            form {
              margin: 10px;
            }
            textarea {
              border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
                ? "2px dashed #09f"
                : "2px solid transparent"};
              border-radius: 8px;
              font-size: 1.2rem;
              width: 100%;
              resize: none;
              padding: 15px;
              outline: none;
              min-height: 200px;
              margin-bottom: 10px;
            }
          `}
        </style>
      </AppLayout>
    </>
  );
}

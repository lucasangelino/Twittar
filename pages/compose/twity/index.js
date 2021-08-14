import { useState, useEffect } from "react";
import AppLayout from "../../../components/applayout";
import Button from "../../../components/button/";
import useUser from "../../../hooks/useUser";
import { addTwity, uploadImage } from "../../../firebase/client";
import router from "next/router";
import Head from "next/head";
import Avatar from "../../../components/avatar";

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

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          setImgURL(url);
        });
      };
      task.on("state_change", onProgress, onError, onComplete);
    }
  }, [task]);

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
      img: imgURL,
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
    console.log(user);
    setDrag(DRAG_IMAGE_STATES.NONE);
    const file = e.dataTransfer.files[0];
    const task = uploadImage(file);
    setTask(task);
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
        <section className="form-container">
          {user && (
            <section className="avatar-continer">
              <Avatar src={user.avatar} height={21} alt={user.username} />
            </section>
          )}
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="¿Qué está pasando?"
              onChange={handleChange}
              value={message}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            ></textarea>
            {imgURL && (
              <section className="remove-img">
                <button onClick={() => setImgURL(null)}>X</button>
                <img src={imgURL} alt="image" draggable="false" />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled}>Twit</Button>
            </div>
          </form>
        </section>

        <style jsx>
          {`
            .remove-img {
              position: relative;
            }

            .form-container {
              display: flex;
              align-items: flex-start;
            }
            .avatar-continer {
              padding-top: 20px;
              padding-left: 10px;
            }
            div {
              padding: 15px;
            }

            button {
              background: rgba(0, 0, 0, 0.3);
              cursor: pointer;
              color: #fff;
              position: absolute;
              right: 15px;
              top: 15px;
              border: 0;
              height: 30px;
              width: 30px;
              border-radius: 100%;
              padding: 10px;
            }

            form {
              margin: 10px;
            }
            img {
              border-radius: 10px;
              height: auto;
              width: 100%;
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

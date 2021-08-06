import { useState, useEffect } from "react";
import Head from "next/head";
import { colors } from "../styles/theme";
import AppLayout from "../components/applayout";
import Button from "../components/button";
import GitHub from "../components/Icons/GitHub";
import Avatar from "../components/Avatar";

// Login
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
    return () => {};
  }, []);

  const handleLoginWithGitHub = () => {
    loginWithGitHub()
      .then((user) => {
        const { avatar, url, username } = user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/logo.svg" alt="Logo"></img>
          <h1>Twity</h1>
          <h4>The original App</h4>
          <div>
            {user === null && (
              <Button onClick={handleLoginWithGitHub}>
                <GitHub height={24} width={24} color={"#fff"} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  text={user.username}
                  withText
                />
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
          section {
            display: grid;
            place-items: center;
            place-content: center;
            height: 80%;
          }
          h1,
          h4 {
            text-align: center;
            text-decoration: none;
            color: ${colors.primary};
          }
          h1 {
            font-size: 45px;
            margin-top: 10px;
            margin-bottom: 10px;5px;
          }
          h4 {
            color: ${colors.secondary};
            margin-top: 5px;
          }
          img {
            width: 100px;
          }
          div {
            margin-top: 50px;
          }
        `}
      </style>
    </>
  );
}

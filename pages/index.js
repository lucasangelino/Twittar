import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "../hooks/useUser";
import { colors } from "../styles/theme";
import Button from "../components/button";
import GitHub from "../components/Icons/GitHub";

// Login
import { loginWithGitHub } from "../firebase/client";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleLoginWithGitHub = () => {
    loginWithGitHub().catch((err) => {
      console.error(err);
    });
  };

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/logo.svg" alt="Logo"></img>
        <h1>Twity</h1>
        <h4>The original App</h4>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleLoginWithGitHub}>
              <GitHub height={24} width={24} color={"#fff"} />
              Login with GitHub
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <img className="spinner" src="/loading.gif" />
          )}
        </div>
      </section>

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
          .spinner {
            width: 30px;
          }
        `}
      </style>
    </>
  );
}

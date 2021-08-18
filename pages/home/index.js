import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Twity from "../../components/twity";
import useUser from "../../hooks/useUser";
import { listenLatestTwities } from "../../firebase/client";

import Create from "../../components/Icons/Create";
import Home from "../../components/Icons/Home";
import Search from "../../components/Icons/Search";

import { colors } from "../../styles/theme";

export default function HomePage() {
  const [twities, setTwities] = useState([]);
  const user = useUser();

  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = listenLatestTwities(setTwities);
    }
    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>Twity / Home</title>
        <meta
          name="description"
          content="Twity is a simple, fast and free site to share MEMEs"
        />
      </Head>
      <section>
        <header>
          <h2>Inicio</h2>
        </header>
        <div>
          {twities.map(
            ({ id, avatar, username, content, userId, createdAt, img }) => (
              <Twity
                key={id}
                avatar={avatar}
                username={username}
                content={content}
                img={img}
                id={id}
                userId={userId}
                createdAt={createdAt}
              />
            )
          )}
        </div>
        <nav>
          <Link href="/home">
            <a>
              <Home stroke="#09f" width={32} height={32} />
            </a>
          </Link>
          <Link href="/search">
            <a>
              <Search stroke="#09f" width={32} height={32} />
            </a>
          </Link>
          <Link href="/compose/twity">
            <a>
              <Create stroke="#09f" width={32} height={32} />
            </a>
          </Link>
        </nav>
      </section>

      <style jsx>
        {`
          header {
            display: flex;
            top: 0;
            position: sticky;
            height: 49px;
            width: 100%;
            align-items: center;
            border-bottom: 1px solid #eee;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
          }

          nav {
            display: flex;
            bottom: 0;
            position: sticky;
            height: 49px;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
          }

          nav a {
            display: flex;
            flex: 1 1 auto;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          nav a:hover {
            background: radial-gradient(#0099ff11 15%, transparent 16%);
            background-size: 180px 180px;
            background-position: center center;
          }

          nav a:hover > :global(svg) {
            stoke: ${colors.primary};
          }

          h2 {
            font-size: 21px;
            font-weight: 700;
            padding-left: 15px;
          }

          section {
            flex: 1;
            display: block;
            position: relative;
            height: 100%;
            overflow-y: scroll;
            margin-bottom: 2px;
          }
          section::-webkit-scrollbar {
            display: none;
          }
          section {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </>
  );
}

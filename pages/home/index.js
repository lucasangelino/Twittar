import { useState, useEffect } from "react";

import AppLayout from "../../components/applayout";
import Twity from "../../components/twity";
import useUser from "../../hooks/useUser";
import { getLatestTwities } from "../../firebase/client";

export default function HomePage() {
  const [twities, setTwities] = useState([]);
  const user = useUser();

  useEffect(() => {
    getLatestTwities().then(setTwities);
    return () => {};
  }, [user]);

  return (
    <>
      <AppLayout>
        <section>
          <header>
            <h2>Inicio</h2>
          </header>
          <div>
            {twities.map(
              ({ id, avatar, username, content, userId, createdAt }) => (
                <Twity
                  key={id}
                  avatar={avatar}
                  username={username}
                  content={content}
                  userId={userId}
                  createdAt={createdAt}
                />
              )
            )}
          </div>
          <nav>Nav bar</nav>
        </section>
      </AppLayout>

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
            position: absolute;
            height: 49px;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
          }

          h2 {
            font-size: 21px;
            font-weight: 700;
            padding-left: 15px;
          }

          section {
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

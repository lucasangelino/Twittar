import { useState, useEffect } from "react";

import AppLayout from "../../components/applayout";
import Twity from "../../components/twity";

export default function HomePage() {
  const [twities, setTwities] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then((data) => setTwities(data.timeline));
    return () => {};
  }, []);

  return (
    <>
      <AppLayout>
        <section>
          <header>
            <h2>Inicio</h2>
          </header>
          <div>
            {twities.map(({ id, avatar, username, message }) => (
              <Twity
                key={id}
                avatar={avatar}
                username={username}
                message={message}
              />
            ))}
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
            position: sticky;
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

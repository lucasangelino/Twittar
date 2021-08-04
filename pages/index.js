import Head from "next/head";
import { colors } from "../styles/theme";
import AppLayout from "../components/AppLayout";
import Button from "../components/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/logo.svg" alt="Logo"></img>
          <h1>Twittar</h1>
          <h4>The original App</h4>
          <div>
            <Button>Login with GitHub</Button>
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
          h4 {
            color: ${colors.secondary};
          }
          img {
            width: 100px;
          }
          div {
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
}

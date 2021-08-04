import Head from "next/head";
import { colors } from "../styles/theme";
import AppLayout from "../components/AppLayout";
import Button from "../components/button";
import GitHub from "../components/Icons/GitHub";

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
          <h1>Twity</h1>
          <h4>The original App</h4>
          <div>
            <Button>
              <GitHub height={24} width={24} color={"#fff"} />
              Login with GitHub
            </Button>
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

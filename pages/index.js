import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { colors } from "../styles/theme";
import AppLayout from "../components/AppLayout";
// devit

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org">Twittar</a>
        </h1>
      </AppLayout>

      <style jsx>
        {`
          a {
            text-decoration: none;
            color: ${colors.primary};
          }
          h1 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

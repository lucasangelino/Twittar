import Link from "next/link";

export default function ContentNotFound() {
  return (
    <>
      <section>
        <img src={"/404.gif"} alt="Error 404 - Content Not Found" />
        <h1>Content Not Found</h1>
        <Link href="/home">
          <a>See more twities</a>
        </Link>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 90%;
        }
        img {
          width: 100%;
        }
        h1 {
          color: #e3e3e3ff;
        }
        a {
          text-decoration: none;
          border-radius: 100px;
          background-color: #00b2e2;
          color: #fff;
          padding: 12px;
          margin: 0;
        }
      `}</style>
    </>
  );
}

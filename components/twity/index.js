import Avatar from "../../components/avatar/";

export default function Twity({ avatar, username, content }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} height={21} alt={username} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #eeeeee;
        }
        article:last-child {
          border-bottom: none;
        }
        div {
          display: flex;
          padding: 10px 15px;
        }
        p {
          lineheight: 1.3125;
          margin: 0;
        }
      `}</style>
    </>
  );
}

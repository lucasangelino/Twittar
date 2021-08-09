import Avatar from "../../components/avatar/";

export default function Twity({
  avatar,
  username,
  content,
  createdAt,
  userId,
}) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} height={21} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span> - </span>
            <date>{createdAt}</date>
          </header>
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
        date {
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </>
  );
}

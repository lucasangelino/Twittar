import Avatar from "../../components/avatar/";
import useTimeAgo from "../../hooks/useTimeAgo";
export default function Twity({
  avatar,
  username,
  content,
  img,
  createdAt,
  userId,
}) {
  const timeago = useTimeAgo(createdAt);
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
            <date>{timeago}</date>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt={username} />}
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
        img {
          height: auto;
          width: 100%;
          border-radius: 10px;
          margin-top: 10px;
        }
        date {
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </>
  );
}

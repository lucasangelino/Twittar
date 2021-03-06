import Avatar from "../../components/avatar/";
import useTimeAgo from "../../hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Twity({
  avatar,
  username,
  content,
  img,
  createdAt,
  userId,
  id,
}) {
  const timeago = useTimeAgo(createdAt);

  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/status/[id]`, `/status/${id}`);
  };

  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} height={21} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span> - </span>
            <Link href={`/status/[id]`} as={`/status/${id}`}>
              <a className="time">
                <time>{timeago}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt={username} />}
        </section>
      </article>

      <style jsx>{`
        .time {
          text-decoration: none;
        }
        .time:hover {
          text-decoration: underline;
        }
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #eeeeee;
        }
        article:last-child {
          border-bottom: none;
        }
        article:hover {
          background-color: #f8f8fa;
          cursor: pointer;s
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
        time {
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </>
  );
}

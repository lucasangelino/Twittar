import Avatar from "../../components/avatar/";
import { colors } from "../../styles/theme";

export default function Twity({ avatar, username, message }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} height={21} alt={username} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid ${colors.terciary};
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

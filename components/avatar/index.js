export default function Avatar({ alt, src, text, withText }) {
  return (
    <>
      <div className={"container"}>
        <div className={"gradient_avatar"}>
          <img className={"avatar"} src={src} alt={alt} title={alt} />
        </div>
        {withText && <p className={"username"}>{text || alt}</p>}
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .avatar {
            width: 49px;
            height: 49px;
            border-radius: 100%;
          }
          .gradient_avatar {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }

          .username {
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
}

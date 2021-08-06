import styles from "./styles.module.css";

export default function Avatar({ alt, src, text, withText }) {
  return (
    <>
      <div className={styles.conainter}>
        <div className={styles.gradient_avatar}>
          <img className={styles.avatar} src={src} alt={alt} title={alt} />
        </div>
        {withText && <p className={styles.username}>{text || alt}</p>}
      </div>
    </>
  );
}

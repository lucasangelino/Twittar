import styles, { globalStyles } from "./styles";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <section>
        <p>This app is Mobile-Only</p>
      </section>

      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

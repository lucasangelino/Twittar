export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>

      <style jsx>
        {`
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            border: 0;
            color: #fff;
            border-radius: 100px;
            font-weight: 800;
            padding: 8px 24px;
            cursor: pointer;
            transition: opacity 0.2s ease;
          }
          button[disabled] {
            opacity: 0.5;
            pointer-events: none;
          }
          button:hover {
            opacity: 0.5;
          }
          button > :global(svg) {
            margin-right: 8px;
          }
        `}
      </style>
    </>
  );
}

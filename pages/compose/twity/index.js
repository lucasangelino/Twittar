import AppLayout from "../../../components/applayout";
import Button from "../../../components/button/";
import { useUser } from "../../../hooks/useUser";

export default function ComposeTwity() {
  const user = useUser();

  return (
    <>
      <AppLayout>
        <form>
          <textarea placeholder="¿Que esta pasando?">{user}</textarea>

          <Button>Twit</Button>
        </form>
        <style jsx>
          {`
            div {
              padding: 15px;
            }
            textarea {
              border: 0;
              font-size: 1.2rem;
              width: 100%;
              resize: none;
              padding: 15px;
              outline: none;
              min-height: 200px;
            }
          `}
        </style>
      </AppLayout>
    </>
  );
}

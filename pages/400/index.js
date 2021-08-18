import Image from "next/image";
import Error404 from "../public/404.gif";

export default function ContentNotFound() {
  return (
    <>
      <Image src={Error404} alt="Error 404 - Content Not Found" />
      <h1>Content Not Found</h1>
    </>
  );
}

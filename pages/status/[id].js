import { useRouter } from "next/router";
import Twity from "../../components/twity";
import { firestore } from "../../firebase/admin";

export default function TwityPage(props) {
  const router = useRouter();

  if (router.isFallback) return "Loading...";

  return (
    <>
      <Twity {...props}></Twity>
      <style jsx>{``}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // params, req, res, query
  const { params } = context;
  const { id } = params;

  return firestore
    .collection("twities")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}

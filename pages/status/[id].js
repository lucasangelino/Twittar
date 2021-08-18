import Twity from "../../components/twity";

export default function TwityPage(props) {
  console.log(props);
  return (
    <>
      <Twity {...props}></Twity>
      <style jsx>{``}</style>
    </>
  );
}

TwityPage.getInitialProps = (context) => {
  // Only work in page components
  // Render in server and in client
  const { query, res } = context;
  const { id } = query;

  return fetch(`http://localhost:3000/api/twity/${id}`).then((apiResponse) => {
    if (apiResponse.ok) {
      return apiResponse.json();
    }
    if (res) {
      res.writeHead(301, { Location: "/ContentNotFound" }).end();
    }
  });
};

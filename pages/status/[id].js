export default function TwityPage(props) {
  console.log(props);
  return (
    <>
      <div>ID</div>
      <style jsx>{``}</style>
    </>
  );
}

TwityPage.getInitialProps = (context) => {
  // Only work in page components
  // Render in server and in client
  const { query } = context;
  const { id } = query;
  console.log("getInitialPropss", id);

  return fetch(`http://localhost:3000/api/twity/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

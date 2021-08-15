export default function TwityPage() {
  return (
    <>
      <div>ID</div>
      <style jsx>{``}</style>
    </>
  );
}

TwityPage.getInitialProps = (context) => {
  // Render in server and in client
  const { query } = context;
  const { id } = query;

  return {};
};

const React = require("react");
const Layout = require("./Layout");

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1>Main page</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;

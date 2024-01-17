const React = require("react");
const NavBar = require("./NavBar");

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="style.css" /> */}
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
        ></link>
        <link href="/styles/style.css" rel="stylesheet"></link>
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/like.js" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

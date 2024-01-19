const React = require("react");
const NavBar = require("./NavBar");

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="style.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="/styles/style.css" rel="stylesheet"></link>
        <link href="/styles/bootstrap.css" rel="stylesheet"></link>
        <script defer src="/scripts/rate.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/like.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/addComment.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

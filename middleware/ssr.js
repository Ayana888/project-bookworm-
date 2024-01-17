const React = require("react");
const ReactDOMServer = require("react-dom/server");

function renderComponent(component, props, { doctype } = { doctype: true }) {
  const reactElement = React.createElement(component, {
    ...props,
    // ещё в компонент передаем в качестве пропсов все,
    // что лежит в res.locals (например, res.locals.user)
    ...this.locals,

    // также передаем все, что лежит в app.locals
    ...this.app.locals,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  return doctype ? `<!DOCTYPE html>${html}` : html;
}

//чтобы, пользоваться ф-ей выше в любом роуте, используется middleware ниже
function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;

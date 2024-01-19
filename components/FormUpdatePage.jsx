const React = require("react");
const Layout = require("./Layout");

function FormUpdatePage({ title, user, book }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form data-id={book.id} id="update-book">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              defaultValue={book.name}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Author
            </label>
            <input
              defaultValue={book.author}
              name="author"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              defaultValue={book.img}
              name="img"
              type="file"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = FormUpdatePage;

const React = require("react");
const Default = require("./layouts/default");

function Index({ breads }) {
  const display = breads.map((bread) => {
    return (
      <li key={bread.id}>
        <a href={`/bread/${bread.id}`}>{bread.name}</a>
      </li>
    );
  });
  return (
    <Default>
      <h2>Index Page</h2>
      <ul>
        <div className="newButton">
          <a href="/bread/new">
            <button>Add a new bread</button>
          </a>
        </div>
        <div className="backButton">
          <a href="/bread">
            <button>Go back to the index</button>
          </a>
        </div>
        {display}
      </ul>
    </Default>
  );
}
module.exports = Index;

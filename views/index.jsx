const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, bakers }) {
  const display = breads.map((bread) => {
    return (
      <li key={bread.id}>
        <a href={`/bread/${bread.id}`}>{bread.name}</a>
      </li>
    );
  });
  const bakerDisplay = bakers.map((baker) => {
    return (
      <li key={baker.id}>
        <a href={`/baker/${baker.id}`}>{baker.name}</a>
      </li>
    );
  });
  return (
    <Default>
      <h2>Index Page</h2>
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
      <ul>{display}</ul>
      <h4>Bakers</h4>
      <ul>{bakerDisplay}</ul>
    </Default>
  );
}
module.exports = Index;

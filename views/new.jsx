const React = require("react");
const Default = require("./layouts/default");

function New({ bakers }) {
  const bakerSelect = bakers.map(baker => {
    return (
      <option key={baker.id} value={baker.id}>{baker.name}</option>
    )
  })
  return (
    <Default>
      <h2>Add a new bread</h2>
      <form action="/bread" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          {bakerSelect}
        </select>
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = New;

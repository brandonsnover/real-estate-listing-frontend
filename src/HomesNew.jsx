export function HomesNew() {
  return (
    <div id="homes-new">
      <h2>Create Listing</h2>
      <form>
        <select name="hometype">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
        <label className="newdata">
          Your Name: <input type="text" required />
          <span></span>
        </label>
        <label className="newdata">
          Address: <input type="text" required />
          <span></span>
        </label>
        <div className="newdata">
          Description: <input type="text" />
        </div>
        <div>
          <button type="submit">Create Listing</button>
        </div>
      </form>
    </div>
  );
}

/* eslint-disable react/prop-types */
export function HomesIndex(props) {
  console.log(props);

  return (
    <div id="homes-index">
      <h2>All Homes</h2>
      <div className="cards">
        {props.homes.map((home) => (
          <div key={home.id}>
            <img src={home.image_url} alt="picture of house" />
            <p className="details">{home.address}</p>
            <p className="details">{home.price}</p>
            <button>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

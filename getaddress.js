export const getAddress = async (lat, lng, api_key) => {
  async function fetchAddress() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${api_key}`
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((err) => console.log(err));
    const { results } = response;
    const { address_components } = results[0];
    console.log(address_components);
    let property = "long_name";
    // const city = address_components[1][property];
    // const county = address_components[3][property];
    // const country = address_components[4][property];
    const { long_name: city } = address_components[1];
    const { long_name: county } = address_components[3];
    const { long_name: country } = address_components[4];
    //TODO: remove console.log
    console.log(city);
    return { city, county, country };
  }
  let address;
  return (address = await fetchAddress());
  console.log(address);
};

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
        let city = address_components[1]["long_name"];
        const county = address_components[3]["long_name"];
        const country = address_components[4]["long_name"];
        return address = { city, county, country };
    }
    const r = await fetchAddress()
    return r
};

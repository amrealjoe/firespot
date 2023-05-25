

export const loadAddress = async (lat, lng, api_key) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${api_key}`
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => console.log(err));
  const { results } = response;
  return results;
};
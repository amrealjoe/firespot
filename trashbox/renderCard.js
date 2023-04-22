function renderCard(data, filter) {
  // data.filter(filterByCounty)
  return data
    .slice(0, 5)
    .map((data, key) => (
      <Card
        key={key}
        county={data.county}
        address={data.address}
        lat={data.lat}
        lng={data.lng}
        status={data.status}
      />
    ));
}

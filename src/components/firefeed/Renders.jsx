import Card from "./Card"

export function renderByFilter(data, filterOption, slice) {
    return (
        data.slice(0, slice).filter(filterOption).map((data, key) => (
            <Card
                key={key}
                county={data.county}
                address={data.address}
                lat={data.lat}
                lng={data.lng}
                status={data.status}
            />
        )))
}
export function renderAll(data) {
    return (
        data.map((data, key) => (
            <Card
                key={key}
                county={data.county}
                address={data.address}
                lat={data.lat}
                lng={data.lng}
                status={data.status}
            />
        )))
}
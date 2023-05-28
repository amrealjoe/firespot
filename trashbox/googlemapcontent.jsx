{ ctxLat + ctxLng }
<GoogleMap
    mapContainerStyle={ContainerStyle}
    center={center}
    zoom={zoom}
    onLoad={onLoad}
> {
        latlng ? (<><Marker
            position={{
                lat: parseInt(lat),
                lng: parseInt(lng)
            }}
            icon={<LocalFireDepartment />}
        /></>) :
            (FireData.map((marker, key) => (
                <Marker
                    key={key}
                    position={{
                        lat: parseInt(marker.lat),
                        lng: parseInt(marker.lng)
                    }}
                    icon={<LocalFireDepartment />}
                />
            )))
    }
</GoogleMap>

// const [map, setMap] = useState(null);
// const onLoad = useCallback(function callback(map) { setMap(map); }, []);
// const { zoom, setZoom, ctxLat, setCtxLat, ctxLng, setCtxLng, ctxCenter, setCtxCenter } = useContext(withMaker)

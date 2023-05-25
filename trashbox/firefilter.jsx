// let FireData = useMemo(() => {
//     let _data = Fire.filter((data) => { return data.county == county })
//     if (_data == "") {
//         dispatch({ type: "all" })
//         return Fire
//     }
//     return _data
// }, [county])



//FILTER FIREDATA
let FilteredData = useMemo(() => FireData.slice(0, slice).filter(option), [FireData, option])

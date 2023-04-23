export function FilterOption(option) {
    switch (option) {
        case "fire":
            return fire
        case "hotspot":
            return hotspot
        case "county":
            return county
        case "all":
            return all
        default:
            break;
    }

    function fire(data) {
        return data.status == true
    }
    function hotspot(data) {
        return data.status == false
    }
    function county(data) {
        return data.county == county
    }
    function all(data) {
        return data;
    }

}
export interface CategoryData {
  "name": {
    "common": string,
    "official": string,
  },
  "independent": boolean,
  "capital": [string],
  "region"?: string,
  "currencies": {
    [propName: string]: { 
      "name" : string,
      "symbol" : string
    }
  },
  "subregion"?: "Southern Europe",
  "languages": {[propName: string]: string; }
  "latlng": [number, number],
  "area": number,
  "maps"?: { "googleMaps": string,
            "openStreetMaps": string},
  "population": number,
  "gini"?: { [propName: string]: string; },
  "timezones": [string],
  "continents"?: [string],
  "flags": { 
    "png": string,
    "svg": string},
  "coatOfArms"?: {
    "png": string,
    "svg": string},
  "startOfWeek"?: string
}

export interface CategoryDatas {
  data: CategoryData[]
}

export interface CategoryItemProps {
  item: CategoryData
}

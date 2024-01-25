export interface main_details {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number,
}
export interface weather_details {
    id: number,
    main: string,
    description: string,
    icon: string
}
export interface wind_details {
    deg: number,
    gust: number,
    speed: number,
}
export interface details {
    clouds: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: main_details
    pop: number,
    sys: { pod: string },
    visibility: number,
    weather: weather_details[],
    wind:wind_details
}
export interface WeatherDetails {
    date: string,
    list: details[]
}
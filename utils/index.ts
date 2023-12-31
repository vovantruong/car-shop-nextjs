import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters


    const headers = {
        'X-RapidAPI-Key': 'bc61b3041emshb239004d3f8b822p1bb432jsn5680074093ab',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string, paintId?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, year, model } = car;

    url.searchParams.append('customer', 'copyright-imaginstudio');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
    url.searchParams.append('paintId', `${paintId}`);

    return `${url}`
}

export const generateCarPaintsList = async (car: CarProps) => {
    const { make, model } = car;

    const response = await fetch(`https://cdn.imagin.studio/getPaints?customer=copyright-imaginstudio&make=${make}&modelFamily=${model.split(' ')[0]}&target=car`)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        });


    return response
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}
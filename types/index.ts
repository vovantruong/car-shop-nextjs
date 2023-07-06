import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title?: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    type?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string
}

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number
    drive: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}
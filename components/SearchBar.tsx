'use client'

import React, { FC, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface SearchButtonProps {
    otherClasses: string
}

interface SearchBarProps {
    setManufacturer: any
    setModel: any
}

const SearchButton: React.FC<SearchButtonProps> = ({ otherClasses }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar: React.FC<SearchBarProps> = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')

    const router = useRouter()

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchManufacturer === '' && searchModel === '') {
            return alert("Please fill in the search bar")
        }

        setManufacturer(searchManufacturer)
        setModel(searchModel);
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt='model icon'
                    width={25}
                    height={25}
                    className='absolute w-[20x] h-[20] ml-4'
                />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    onChange={e => setSearchModel(e.target.value)}
                    placeholder='Tigua'
                    className='searchbar__input'
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar
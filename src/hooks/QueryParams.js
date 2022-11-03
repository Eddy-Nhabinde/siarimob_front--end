import { useSearchParams } from 'react-router-dom';
import React from 'react'

const useParams = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const add = (key, value) => {
        searchParams.set(key, value);
        setSearchParams(searchParams)
    }

    const remove = (key) => {
        searchParams.delete(key)
        setSearchParams(searchParams)
    }

    const removeAll = () => {
        setSearchParams('')
    }

    const useQuery = () => {
        return React.useMemo(() => new URLSearchParams(searchParams), [searchParams]);
    }

    return { add, remove, removeAll, useQuery };
}

export { useParams }
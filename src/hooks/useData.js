import { useEffect, useState } from 'react';

export default function useServices() {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./shortData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return [services]
}
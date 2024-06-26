import { useState, useEffect } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        // setTimeout(() => {
            fetch(url)
                .then((res) => { if (!res.ok) throw Error("could not able fetch the data"); return res.json() })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    setData(null)
                    setError(err.message);
                    setIsPending(false);
                })
        // }, 1000);

    }, [url]);

    return { data, isPending, error };
}

export default useFetchData;
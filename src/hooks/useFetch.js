import React, { useState, useEffect } from 'react'

const useFetch = url => {
	const [data, setData] = useState(null),
		[isPending, setIsPending] = useState(true),
		[error, setError] = useState(null)

	useEffect(() => {
		const getData = async url => {
			try {
				let res = await fetch(url)
				if (!res.ok) {
					throw {
						err: true,
						status: !res.statusText ? 'Ocurrio un error' : res.statusText,
					}
				}
				const data = await res.json()
				setIsPending(false)
				setData(data)
				setError({ err: false })
			} catch (err) {
				setIsPending(true)
				setData(null)
				setError(err)
				console.log(error)
			}
		}
		getData(url)
	}, [url])

	return { data, isPending, error }
}

export default useFetch

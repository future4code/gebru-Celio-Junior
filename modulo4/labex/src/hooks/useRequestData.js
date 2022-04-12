import { useState, useEffect } from 'react'
import { API } from '../services/api'

export const useRequestData = (url, auth) => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      headers: {
        auth,
      },
    }

    API.get(url, headers)
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [url])

  return [data, isLoading, error]
}

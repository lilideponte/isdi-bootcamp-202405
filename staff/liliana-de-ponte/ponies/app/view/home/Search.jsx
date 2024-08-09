import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Form from '../library/Form'
import Input from '../library/Input'
import Button from '../library/Button'

export default function Search() {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState('')

    const q = searchParams.get('q') || ''

    useEffect(() => {
        if (q)
            setQuery(q)
    }, [q])

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const { value: query } = form.q

        if (!query.trim())
            navigate('/search')
        else if (location.pathname !== '/search')
            navigate(`/search?q=${query}`)
        else
            setSearchParams({ q: query })

        setQuery(query)
    }

    const handleInputChange = event => {
        const { value: query } = event.target

        setQuery(query)
    }

    return <Form onSubmit={handleSubmit} className="flex justify-center items-center text-pink-950">
        <Input name="q" placeholder="query" value={query} onChange={handleInputChange} />
        <Button className="bg-[#F981FB]  dark:bg-pink-950 font-serif h-[30px] rounded-[8px] border-[f7bff8]" type="submit">🔍</Button>
    </Form>
}
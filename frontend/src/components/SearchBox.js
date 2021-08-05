import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        }else {
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <Form className="d-flex" onSubmit={submitHandler}>
            <FormControl
                type="search"
                placeholder="Search"
                className="mx-2"
                onChange={(e) => setKeyword(e.target.value)}
                aria-label="Search"
            />
            <Button className="mr-2" type="submit" variant="outline-success">Search</Button>
            </Form>
    )
}

export default SearchBox
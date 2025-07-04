import { Button, Input } from "@mui/material"
import axios from "axios"
import { useState } from "react"

let render = 0

const AddNewNameForm = () => {

    const [name, setName] = useState<string>('')

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('onSubmitHandler', name)

        axios.post("http://localhost:8080/generate-partner/add-partner", { name })
            .then(response => console.log('response', response))
            .catch(error => console.error('error', error))
    }

    render++
    console.log('AddNewNameForm render', render)

    return <form onSubmit={onSubmitHandler} data-component="AddNewNameForm">
        <Input type="text" onChange={event => setName(event.target.value)} value={name}
            sx={{
                color: "white"
            }} />
        <Button type="submit">Add new name</Button>
    </form>
}

export default AddNewNameForm
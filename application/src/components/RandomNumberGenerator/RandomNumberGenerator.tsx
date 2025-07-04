import { Box, Button } from "@mui/material"
import { useState } from "react"

type TRandomIntFromInterval = (min: number, max: number) => void

let render = 0

const RandomNumberGenerator = () => {

    const [randomNumber, setRandomNumer] = useState<number>(1)

    const randomIntFromInterval: TRandomIntFromInterval = (min, max) => { // min and max included 
        setRandomNumer(Math.floor(Math.random() * (max - min + 1) + min))
        // setRandomNumer(1)
    }

    // console.log('randomNumber', randomNumber)
    render++
    console.log('RandomNumberGenerator render', render)

    return <Box data-component="RandomNumberGenerator">
        <Button onClick={() => {
            console.log('randomIntFromInterval(1, 10)', randomIntFromInterval(1, 10))
        }} key="btn-random">
            generate random number between 1 and 10
        </Button>
        Random number: {randomNumber}
    </Box>
}

export default RandomNumberGenerator
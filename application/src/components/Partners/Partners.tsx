import { Box, Button } from "@mui/material"
import axios from "axios"
import { useReducer } from "react"

interface IPerson {
    _id: string;
    name: string;
    lastDateOfPartnership: Date;
    numbersOfPartnership: number;
}

interface IpartnersInitialState {
    partners: IPerson[],
    loading: boolean,
    error: string | null
}
const partnersInitialState: IpartnersInitialState = {
    partners: [],
    loading: false,
    error: null
}

interface IpartnersReducerAction {
    type: string;
    payload?: any;
}

const SET_PARTNERS = "SET_PARTNERS"
const LOADING_PARTNERS = "LOADING_PARTNERS"
const ERROR_PARTNERS = "ERROR_PARTNERS"

// @ts-expect-error fix any type
const partnersReducer = (state, action: IpartnersReducerAction) => {
    console.log('%c partnersReducer', "color:orange", state, action)
    switch (action.type) {
        case LOADING_PARTNERS:
            return {
                ...state,
                loading: true
            }
        case SET_PARTNERS:
            return {
                ...state,
                partners: action.payload,
                loading: false
            }
        case ERROR_PARTNERS: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        default:
            return state
    }
}

const Partners = () => {

    const [partnersState, parternsDispatch] = useReducer(partnersReducer, partnersInitialState)

    const getPartners = () => {

        parternsDispatch({
            type: LOADING_PARTNERS,
        })

        setTimeout(() => {
            axios.get('http://localhost:8080/generate-partner/')
                .then(response => {
                    console.log('response', response)
                    parternsDispatch({
                        type: SET_PARTNERS,
                        payload: response.data
                    })
                })
                .catch(error => {
                    console.error('error', error)
                    parternsDispatch({
                        type: ERROR_PARTNERS,
                        payload: `Error: ${error.message}`
                    })
                })
        }, 1000)

    }


    console.log('partnersState', partnersState)

    if (partnersState.loading)
        return <Box>Loading...</Box>

    if (partnersState.error)
        return <Box sx={{
            color: "red"
        }}>
            {partnersState.error}
        </Box>

    return <Box sx={{
        border: "5px dotted purple"
    }}>
        <Button onClick={getPartners} key="btn-get-partners">
            get partners
        </Button>
        {partnersState.partners.map((partner) => {
            console.log('partner', partner)
            return <div key={partner._id}>{partner.name}</div>
        })}
    </Box>
}

export default Partners
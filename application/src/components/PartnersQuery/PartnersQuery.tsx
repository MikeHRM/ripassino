import { Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError, AxiosResponse } from "axios"

interface IPerson {
    _id: string;
    name: string;
    lastDateOfPartnership: Date;
    numbersOfPartnership: number;
}

// type extractNameAndId = (person: IPerson) => Pick<IPerson, "_id" | "name">

// interface IErrorBase<T> {
//     error: Error | AxiosError<T>;
//     type: 'axios-error' | 'stock-error';
// }

// interface IAxiosError<T> extends IErrorBase<T> {
//     error: AxiosError<T>;
//     type: 'axios-error';
// }
// interface IStockError<T> extends IErrorBase<T> {
//     error: Error;
//     type: 'stock-error';
// }

const PartnersQuery = () => {

    const { data: partnersData, isLoading, isError, error } = useQuery<AxiosResponse<IPerson[]>, Error>({ // <IPerson[], AxiosError>
        queryKey: ['partners'],
        queryFn: () => axios.get<IPerson[]>('http://localhost:8080/generate-partner/') //, AxiosError<{message: string}>
        // queryFn: async () => {
        //     const response = await fetch("http://localhost:8080/generate-partnerXXX/")
        //     console.log('response', response)
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok')
        //     }
        //     return response.json<IPerson[]>()
        // },
    })

    console.log('partnersData', partnersData)

    // const extractNameAndId: extractNameAndId = (person: IPerson) => {
    //     return {
    //         _id: person._id,
    //         name: person.name
    //     }
    // }

    if (isLoading)
        return <Box>Loading...</Box>

    if (isError && !!error)
        return <Box sx={{
            color: "red"
        }}>
            {error.message}
        </Box>

    return <Box sx={{
        border: "5px dotted lime"
    }}>
        PartnersQuery
        {partnersData?.data.map((partner) => {
            console.log('partner', partner)
            return <div key={partner._id}>{partner.name}</div>
        })}
    </Box>
}

export default PartnersQuery
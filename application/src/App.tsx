// interface IRandomIntFromInterval {
//   min: number;
//   max: number;

import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RandomNumberGenerator from "./components/RandomNumberGenerator/RandomNumberGenerator";
import AddNewNameForm from "./components/AddNewNameForm/AddNewNameForm";
import Partners from "./components/Partners/Partners";
import PartnersQuery from "./components/PartnersQuery/PartnersQuery";
import DataGridTest from "./components/DataGridTest/DataGridTest";
import Counter from "./components/Counter/Counter";
import CounterValue from "./components/Counter/CounterValue";
import { calculateCognitiveComplexity } from "./calculateCognitiveComplexity";
import PageCoverage from "./pages/PageCoverage";
import Ripassino from "./pages/Ripassino";
import RipassinoSuspense from "./pages/RipassinoSuspense";
import ThemeToggle from "./theme/ThemeToggle";

// }

interface IPerson {
  _id: string;
  name: string;
  lastDateOfPartnership: Date;
  numbersOfPartnership: number;
}

// const people: IPerson[] = [
//   {
//     id: "randomid",
//     name: "randomname",
//     lastDateOfPartnership: new Date(),
//     numbersOfPartnership: 0
//   }
// ]

let render = 0;

function App() {
  // console.log("axios", axios);
  // const [partners, setPartners] = useState<IPerson[]>([])
  // const [errorMessage, setErrorMessage] = useState<string | null>(null)
  // const [loading, setLoading] = useState<boolean>(false)

  // console.log('partnersState', partnersState)
  // console.log('parternsDispatch', parternsDispatch)

  // useEffect(() => {
  //   console.log('%c useEffect', "color:red")
  //   // if (randomNumber !== 0) {
  //   //   console.log("%c inside IF", "color: blue")
  //   //   try {
  //   //     const data = await getPartners()
  //   //   } catch (error) {
  //   //     console.log('error', error)
  //   //   }
  //   // }
  //   const getPartners = async () => {
  //     try {
  //       setLoading(true)
  //       const { data } = await axios.get('http://localhost:8080/generate-partnerxxx/')
  //       setPartners(data)
  //     } catch (error) {
  //       // ?
  //       console.error('error', error.message)
  //       setErrorMessage(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   getPartners()

  // }, [randomNumber])

  // const sendNewPerson = (name: string) => {

  // }

  render++;
  // console.log("App render", render);
  // console.log('partners', partners)

  // console.log(
  //   "CounterValue cognitive complexity",
  //   calculateCognitiveComplexity(<Counter />)
  // );

  // const partnersToRender = partners.map(partner => {
  //   return { ...partner, color: "red" }
  // })

  return (
    <>
      <Router>
        <Switch>
          <Route path="/coverage">
            <PageCoverage />
          </Route>
          <Route path="/counter">
            <Counter />
            <CounterValue />
          </Route>
          <Route path="/">
            <Ripassino />
            {/* <RipassinoSuspense /> */}
          </Route>
        </Switch>
      </Router>
      <ThemeToggle />
    </>
    // <DataGridTest/>
    // <>
    //   <RandomNumberGenerator />

    //   {/* <Box>
    //     <Button onClick={() => parternsDispatch({
    //       type: "hello"
    //     })}>
    //       test dispatch
    //     </Button>
    //   </Box> */}

    //   <Partners />
    //   <PartnersQuery />

    //   <AddNewNameForm />
    // </>
  );
}

export default App;

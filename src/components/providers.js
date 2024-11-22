'use client'

import { Onborda, OnbordaProvider } from "onborda"
import StepCard from "./stepCard"
import TourCard from "./TourCard"
import Tours from "./tours"


export default function Providers({children}){
    return(
        <OnbordaProvider tours={Tours} activeTour="exampleTour">
            <Onborda tourComponent={TourCard} cardComponent={StepCard} debug={true}>
                {children}
            </Onborda>
        </OnbordaProvider>
    )
}
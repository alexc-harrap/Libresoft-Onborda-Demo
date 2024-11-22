'use client'

import Button from "./Button";

const TourCard = ({tour, currentStep, currentTour, setStep, completedSteps, closeOnborda}) => {
    return <>
        <div className={'absolute bottom-3 left-3 w-60 p-2 bg-slate-500'}>
            <h2 className="text-xl">{tour.title}</h2>
            <div className="flex flex-col gap-1">
                {tour.steps.map((step, index)=>{
                    return <Button data-active={currentStep == index} key={index} onClick={()=>setStep(index)}>{step.title}</Button>
                })}
            </div>
        </div>
    </>
}
export default TourCard;
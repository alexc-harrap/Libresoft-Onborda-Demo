'use client'

import Button from "./Button";

const StepCard = ({step, currentStep, totalSteps, nextStep, prevStep, arrow, completedSteps, pendingRouteChange}) => {
    return <>
        <div className="bg-slate-500 p-2">
            <h2>{step.title}</h2>
            <div>{step.content}</div>
            <div className="flex justify-around">
                <Button onClick={()=>prevStep()} disabled={pendingRouteChange || currentStep == 0}>Prev</Button>
                <Button onClick={()=>nextStep()} disabled={pendingRouteChange || currentStep == totalSteps-1}>Next</Button>
            </div>
        
        </div>
        {arrow}
    </>
}
export default StepCard;
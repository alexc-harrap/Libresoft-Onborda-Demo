import Link from "next/link";

export default function Page(){
    return <>
        <h1 className="text-3xl">Home</h1>
        <main className="flex flex-col gap-5 p-3">
            <div id="interactable-input" >
                <label htmlFor="home-input">Interactable Input</label>
                <input type="text" id="home-input" name="home-input" className="block ring-2" />
            </div>

            <div id="non-interactable-input" >
                <label htmlFor="home-input2">Interactable Input</label>
                <input type="text" id="home-input" name="home-input2" className="block ring-2" />
            </div>
        </main>
       
    </>
}
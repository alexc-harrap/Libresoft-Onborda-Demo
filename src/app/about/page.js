import Link from "next/link";

export default function Page(){
    return <>
        <h1 className="text-3xl">About</h1>
        <main className="flex flex-col gap-5 p-3">
        <div id={"some-content-to-focus"}>
            This is some content that is focused once the route is loaded.
        </div>
       </main>
    </>
}
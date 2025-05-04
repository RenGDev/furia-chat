'use client'
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter()
    function handleHome(){
        router.push("/")
    }
    return(
        <main className="w-full bg-white">
            <img className="m-auto p-9" src="./logo-furia.svg" alt="logo" onClick={handleHome}/>
        </main>
    )
}
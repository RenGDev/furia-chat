'use client'
import { useRouter } from "next/navigation"

export default function Hero(){
    const router = useRouter()
    function handleNext(){
        router.push("/chat")
    }
    return(
        <main className="flex flex-col justify-center items-center gap-20 h-dvh">
            <div className="flex justify-evenly items-center w-full">
                <img src="./Furia_Esports_logo.png" alt="furia_logo" />
                <h1 className="text-5xl w-2/6">A torcida da FURIA agora tem voz!</h1>
            </div>
            <button className="bg-white w-52 font-bold rounded-lg text-black px-4 py-3" onClick={handleNext}>Entrar no chat</button>
        </main>
    )
}
export default function Footer(){
    return(
        <main className="w-full flex items-center justify-center text-black bg-white px-12">
            <div>
                <div className="flex items-center">
                    <img src="./icons8-instagram-48.png" alt="" />
                    <a href="https://www.instagram.com/furiagg/">@furiagg</a>
                </div>
                <div className="flex items-center">
                    <img src="./icons8-x-48.png" alt="" />
                    <a href="https://x.com/FURIA">@FURIA</a>
                </div>
                <div className="flex items-center">
                    <img src="./icons8-twitch-48.png" alt="" />
                    <a href="https://www.twitch.tv/furiatv">FURIAtv</a>
                </div>
            </div>
            <img className="m-auto p-20" src="./logo-furia.svg" alt="logo" />
            <h2>Desenvolvido por: Lorenzo Q. Gonçalves</h2>
        </main>
    )
}
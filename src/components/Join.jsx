import JoinImg from "../assets/images/join-img.png"
import Button_Major from "./reusable/Button_Major"
import Button_Minor from "./reusable/Button_Minor"

export default function Join() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        xmslns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient
                                id="759c1415-0410-454c-8f7c-9a820de03641"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)"
                            >
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to start earning?
                            <br />
                            Start using our app today.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            A whole new world awaits! Join us today and explore that world for yourself.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Button_Major btnText="Get Started"/>
                            <Button_Minor style={{color: "#fff"}}/>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute top-0 left-0 w-[37rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src={JoinImg}
                            alt="Someone advertising Utasky app"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

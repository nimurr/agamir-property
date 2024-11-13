import { FiPhoneCall } from "react-icons/fi";


export default function Contact() {
    return (
        <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10 grid lg:grid-cols-2 items-center gap-10">
            <div>
                <h3 className="text-xl font-semibold">WANT TO BUY PLOT?</h3>
                <h1 className="my-3 text-3xl sm:text-5xl text-primary font-semibold">We deliver accurate plot
                    valuation reports</h1>
                <p className="my-3">Agamir Property well known real estate developer in Bangladesh for developing a wide range of residential & commercial projects.</p>
                <button className="flex text-xl items-center gap-2 text-white bg-primary py-3 px-8 rounded-md">
                    <FiPhoneCall />
                    +8801796644846
                </button>
            </div>
            <div>
                <img className="w-full" src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731510936/Agamir_property/HomePage/bmp7hwmoefvmrqpon4ik.png" alt="" />
            </div>
        </div>
    )
}

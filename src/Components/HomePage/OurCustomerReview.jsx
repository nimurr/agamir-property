import { FaStar } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader";


export default function OurCustomerReview() {
    return (
        <div>
            <SectionHeader state="Our Customers Review"></SectionHeader>
            <div className="lg:my-20 my-10 ">
                <div className="slider ">
                    {/* slider */}
                    {/* slider-track */}
                    <div className="slider-track ">
                        {Array(10)
                            .fill()
                            .map((_, idx) => (
                                <div
                                    key={idx}
                                    className="slide min-w-[300px] md:min-w-[400px] cursor-pointer border border-primary rounded-md p-5"
                                >
                                    <div className="flex items-center gap-5">
                                        <img className="w-14" src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731507853/Agamir_property/HomePage/coyjmho4zcngecjjtiti.png" alt="" />
                                        <div>
                                            <h1 className="text-2xl font-semibold">Raisul islam Rana</h1>
                                            <p>Ceo mica kotha.com</p>
                                        </div>
                                    </div>
                                    <p className="my-3 text-gray-700">We are very happy that, Agamir Property gave
                                        us a lucrative plot what we needed, their
                                        service is too good. They give us the best
                                        companion to find out our desire plot.</p>
                                    <div className="flex items-center gap-2 text-orange-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

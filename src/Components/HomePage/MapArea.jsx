import SectionHeader from "../Common/SectionHeader";

export default function MapArea() {
    return (
        <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10 ">
            <SectionHeader state="Basundhara R/A Area"></SectionHeader>
            <div className="border-4 rounded-md border-primary my-10">
                <iframe className="w-full sm:h-[80vh] h-[50vh] rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22107.15591341379!2d90.43610761327176!3d23.818712482325346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731508370839!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
            </div>
        </div>
    )
}

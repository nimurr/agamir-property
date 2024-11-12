import SectionHeader from "../Common/SectionHeader";

export default function BlockFeatures() {
  return (
    <div className="lg:my-20 my-10">
      <SectionHeader state="Block Feature"></SectionHeader>
      <br />
      <br />
      <div className="slider ">
        {/* slider */}
        {/* slider-track */}
        <div className="slider-track ">
          {Array(10)
            .fill()
            .map((_, idx) => (
              <div
                key={idx}
                className="slide min-w-[350px] cursor-pointer border border-primary rounded-md"
              >
                <h2 className="py-3 bg-blue-200 text-primary text-center text-3xl font-bold border-b-2 border-primary">
                  BLOK-H
                </h2>
                <img
                  className="w-5/12 mx-auto my-5"
                  src="https://assets.dummyjson.com/public/qr-code.png"
                  alt="QR Code"
                />
                <div className="my-10 px-3 text-center">
                  <h3 className="text-2xl text-primary font-semibold mb-3">
                    Shopping Centers
                  </h3>
                  <p>
                    Add a little more flare and inspiration to your home. The
                    walls, floors, and accents of the house can be tweaked
                    without major reconstruction or time lost.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

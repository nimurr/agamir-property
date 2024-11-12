 
export default function SectionHeader({state}) {
    console.log(state)
  return (
    <div className="flex flex-col justify-center gap-2">
      <h2 className="text-3xl font-semibold  text-center">
        {state}
      </h2>
      <div>
        <span className="w-52 h-[2px] bg-gray-400 mb-1 block mx-auto"></span>
        <span className="w-36 h-[2px] bg-gray-400 block mx-auto"></span>
      </div>
    </div>
  );
}

 
export default function SectionHeader({state}) {
    console.log(state)
  return (
    <div className="flex flex-col justify-center gap-2">
      <h2 className="xl:text-5xl text-3xl font-semibold  text-center">
        {state}
      </h2>
      <div className="flex flex-col gap-1 mt-3">
        <span className="w-52 h-[3px] bg-primary block mx-auto"></span>
        <span className="w-36 h-[2px] bg-primary block mx-auto"></span>
      </div>
    </div>
  );
}

type Props = {
  label: string
  description: string
}

export function DefaultOverlayContent({ description, label }: Props) {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <header className="mt-[16.5vh] text-center">
        <h1 className="font-medium text-[40px] leading-10 text-[#393c41]">
          {label}
        </h1>
        <h2 className="text-sm leading-5 text-[#5c5e62]">{description}</h2>
      </header>

      <div className="flex flex-col items-center justify-center mb-[130px] sm:flex-row sm:mb-[90px]">
        <button className="bg-[#1a1720] text-white opacity-80 text-xs font-medium tracking-widest uppercase py-3 px-10 rounded-3xl cursor-pointer">
          Custom Order
        </button>
        <button className="bg-white text-[#1a1720] opacity-[0.65] text-xs font-medium tracking-widest uppercase py-3 px-10 rounded-3xl cursor-pointer mt-[10px] sm:mt-0 sm:ml-[10px]">
          Existing Inventory
        </button>
      </div>
    </div>
  )
}

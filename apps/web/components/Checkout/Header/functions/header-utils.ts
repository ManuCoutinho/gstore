function selectedColor(step: string) {
  return step === step ? "text-pink-500" : "text-zinc-400"
}

function selectedBg(step: string) {
  return step === step ? "bg-pink-500 text-white" : "bg-zinc-400 text-black"
}


export { selectedBg, selectedColor }
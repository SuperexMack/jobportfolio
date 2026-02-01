import Image from "next/image";

export function Demo() {
  return (
    <div className="w-full overflow-x-auto mt-[20px]">

        <h1 className="text-center text-[35px] font-bold text-white underline">Github Heatmap</h1>

    <div className="mt-[30px]">
      <img
        src="https://ghchart.rshah.org/SuperexMack"
        alt="GitHub contribution heatmap"
        className="mx-auto w-[900px]"
      />
    </div>
    </div>
  );
}

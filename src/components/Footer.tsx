import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-10">
      <div className="relative">
        <h1 className="text-9xl overflow-hidden flex">
          Trade Anytime, <span className="text-[#a35ca2]">Anywhere.</span>
        </h1>
        <div className="absolute top-0 w-full">
          <Image
            className="mx-auto top-0 right-1/2 left-1/2 z-100 p-1 rounded bg-white w-48"
            width="100"
            height="100"
            src="/qr.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <Image
          className="w-48"
          width="100"
          height="100"
          src="/store.png"
          alt=""
        />
      </div>
    </div>
  );
}

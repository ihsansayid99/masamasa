import Image from "next/image";
import Link from "next/link";

export const Collection = ({preWedding, wedding, portrait}) => {
  return (
    <section className="my-4">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Koleksi MasaMasa
      </h1>
      {/* <div className="flex items-center justify-center my-6">
          <button className="px-4 py-1 border-2 rounded-lg mx-2 font-medium hover:underline">
            Pre-wedding
          </button>
          <button className="px-4 py-1 border-2 rounded-lg mx-2 font-medium hover:underline">
            Wedding
          </button>
          <button className="px-4 py-1 border-2 rounded-lg mx-2 font-medium hover:underline">
            Portrait
          </button>
        </div> */}
      <div className="flex flex-col lg:flex-row items-center w-full my-10">
        <div className="w-full lg:w-1/3 h-[500px] lg:h-[700px] relative">
          <Link href="/pre-wedding" className="collection">
            <Image
              priority={true}
              src={preWedding}
              alt="MasaMasa Prewedding"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[50%] mx-auto left-0 right-0 text-center text-xl font-bold text-collection text-white">
              Pre-Wedding
            </p>
          </Link>
        </div>
        <div className="w-full lg:w-1/3 h-[500px] lg:h-[700px] my-2 lg:my-0 relative mx-2">
          <Link href="/wedding" className="collection">
            <Image
              priority={true}
              src={wedding}
              alt="MasaMasa Wedding"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[50%] mx-auto left-0 right-0 text-center text-xl font-bold text-collection text-white">
              Wedding
            </p>
          </Link>
        </div>
        <div className="w-full lg:w-1/3 h-[500px] lg:h-[700px] relative">
          <Link href="/portrait" className="collection">
            <Image
              priority={true}
              src={portrait}
              alt="MasaMasa Portrait"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[50%] mx-auto left-0 right-0 text-center text-xl font-bold text-collection text-white">
              Portrait
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { WaveSine } from "phosphor-react";
import React from "react";
import data from "../../utils/wedding.json";

export const Wedding = () => {
  return (
    <>
      <section>
        <h1 className="text-4xl text-center mt-8">Wedding at MasaMasa</h1>
        <WaveSine size={18} className="mx-auto my-2" />
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 my-16">
          {data?.map((item, index) => (
            <>
              <div className="h-[300px] lg:h-[400px]">
                <Image
                  src={`/images/wedding/${item.image}`}
                  priority
                  className="w-full h-full object-cover object-center"
                  alt="MasaMasa Wedding Portfolio"
                  width={500}
                  height={500}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

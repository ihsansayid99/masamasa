import Image from "next/image";
import { WaveSine } from "phosphor-react";
import React from "react";

export const Portrait = ({data}) => {
  return (
    <>
      <section>
        <h1 className="text-4xl text-center mt-8">Portrait at MasaMasa</h1>
        <WaveSine size={18} className="mx-auto my-2" />
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 my-16">
          {data?.map((item, index) => (
            <>
              <div className="h-[300px] lg:h-[400px]">
                <Image
                  src={`/images/portrait/${item.image}`}
                  priority
                  className="w-full h-full object-cover object-center"
                  alt="MasaMasa Portrait Portfolio"
                  width={500}
                  height={500}
                  quality={100}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};



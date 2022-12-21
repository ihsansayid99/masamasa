import Image from "next/image";

export const Hero = ({heroImage}) => {
  return (
    <section className="hero py-4">
      <div className="w-full h-[300px] lg:h-[800px]">
        <Image
          src={heroImage}
          priority
          alt="Hero Image MasaMasa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-4 flex flex-col lg:flex-row">
        <div className="max-w-[800px] w-full lg:w-1/2">
          <h1 className="text-6xl lg:text-8xl font-bold leading-none">
            A Flawless moment.
          </h1>
          <h5 className="my-4 text-xl lg:text-3xl font-normal">
            @MasaMasaPhotography
          </h5>
        </div>
        <div className="w-full lg:w-1/2 text-sm lg:text-base break-words text-justify">
          <p className="my-3">
            Masamasaphotography adalah kelompok fotografer dan videografer yang
            selalu bersemangat menceritakan kisah dan menyaksikan hubungan
            sejati antara dua jiwa. Kami berdiri untuk gambar yang jujur, diisi
            dengan detail unik dalam sebuah ode untuk merayakan Anda dan orang
            yang Anda cintai sekaligus. Tatapan yang tenang, senyum malu-malu,
            air mata dan tawa semuanya diterjemahkan ke dalam gambar diam dan
            bergerak yang dapat bertahan melampaui berlalunya waktu, persis
            seperti yang Anda hargai dan ingat.
          </p>
          <p className="my-3">
            Bagi kami, keindahan itu terungkap melalui rangkaian tawa, tatapan
            mata yang teduh, atau tanah basah yang menjadi lantai dansa.
            memadukan cahaya, dan menciptakan visual yang sederhana.
            Bagian-bagian tersebut kami kemas dalam bentuk cerita-cerita hangat
            yang tak tergantikan.
          </p>
          <p className="my-3">
            Dan inilah kami, akan selalu siap untuk mengabadikan kisah Anda.
          </p>
        </div>
      </div>
      <hr className="border-2 border-black" />
    </section>
  );
};

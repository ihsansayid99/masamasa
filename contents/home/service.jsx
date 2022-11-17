import { WhatsappLogo } from "phosphor-react";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";

export const Service = () => {
  let { handleModal } = useContext(ModalContext);
  const dataModal = [
    {
      name: 'Admin Bandung/Jakarta',
      whatsapp: `https://wa.me/6287824588889?text=Halo%20MasaMasa Bandung/Jakarta!`
    },
    {
      name: 'Admin Cianjur',
      whatsapp: `https://wa.me/6285772025040?text=Halo%20MasaMasa%20Cianjur!`
    },
  ]
  return (
    <section className="bg-[#121212] flex flex-col lg:flex-row items-center text-white px-8 py-6">
      <div className="max-w-[500px] w-full lg:w-1/2">
        <h3 className="text-5xl lg:text-7xl font-bold">
          Apa tanggung jawab & Janji kita?
        </h3>
      </div>
      <div className="w-full lg:w-1/2 mx-auto">
        <p className="font-medium text-base lg:text-lg my-4">
          Tim kami di Foto tidak akan melakukan apa pun selain Luangkan Momen
          dalam Proses. Foto tidak akan membawa pernikahan & potret Anda ke
          Pernikahan / Potret biasa, Kami akan menjadi yang terbaik untuk
          menyampaikan kisah Anda ke dalam momen yang disebut abadi
        </p>
        <button onClick={() => handleModal(dataModal)} className="px-2 py-2 border-2 border-white flex items-center hover:underline text-sm lg:text-base">
          Chat Whatsapp{" "}
          <WhatsappLogo className="ml-2 w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
        </button>
      </div>
    </section>
  );
};

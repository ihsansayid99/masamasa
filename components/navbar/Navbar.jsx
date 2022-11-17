import Link from "next/link";
import { ArrowUpRight } from "phosphor-react";
import { useContext } from "react";
import { ModalContext } from '../../context/modalContext'

export const Navbar = () => {
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
    <nav className="lg:py-6 flex items-center justify-between py-4">
      <div className="">
        <Link href="/" className="text-base lg:text-xl font-semibold underline">
          MasaMasa Photography
        </Link>
      </div>
      <div className="">
        <ul className="flex">
          <li>
            <button onClick={() => handleModal(dataModal)} className="text-xs lg:text-base font-semibold px-3 py-1 lg:px-6 lg:py-2 border-2 border-gray-700 rounded-full flex hover:underline">
              CONTACT{" "}
              <ArrowUpRight className="ml-2 w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

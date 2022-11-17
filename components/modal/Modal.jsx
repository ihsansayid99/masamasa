import Link from "next/link";
import { WhatsappLogo, X } from "phosphor-react";
import React, { useContext } from "react";
import { ModalContext } from "../../context/modalContext";

export const Modal = () => {
  let { modalContent, handleModal, modal } = useContext(ModalContext);
  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-10/12 lg:w-1/5 my-6 mx-auto max-w-3xl border-2 border-gray-900 modal">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-3 border-b border-solid border-slate-200">
                  <h3 className="text-xl font-semibold">Kontak Kami</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleModal()}
                  >
                    <X color="black" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-3 flex-auto">
                  {modalContent.map((item, index) => {
                    return (
                      <Link target="_blank" rel="noopener noreferrer" key={index} href={item.whatsapp} className="my-4 text-black text-lg leading-relaxed flex items-center justify-between font-medium">
                        {item.name}
                        <WhatsappLogo className="ml-2 w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

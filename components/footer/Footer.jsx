import { Copyright } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="my-6">
      <span className="flex justify-center items-center">
        <Copyright className="ml-2 w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] mr-2" />{" "}
        MasaMasa Photography {new Date().getFullYear()}
      </span>
    </footer>
  );
};

import {
  FaCaretRight,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import { SocialMediasLinks } from "./SocialMediasLinks";
import { KsBeigeButton } from "@/components";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-3 gap-5 bg-ks-dark p-10 mt-[5rem] text-gray-500">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center col-span-3 mb-5">
        <h5 className="font-bold text-xl text-ks-white">
          KSphere.{" "}
          <span className="text-xs font-semibold text-gray-500">
            / Simply #1 Real Estate
          </span>
        </h5>
        <SocialMediasLinks />
      </div>
      <div className="col-span-3 2lg:col-span-1">
        <h5 className="font-bold mb-2 text-ks-white">Quick Links</h5>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <FaCaretRight />
              <span>Home</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <FaCaretRight />
              <span>List Layout</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <FaCaretRight />
              <span>Blog</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <FaCaretRight />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-3 2lg:col-span-1 gap-2">
        <h5 className="font-bold text-ks-white">Contact Us</h5>
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <span>
            3015 Grand Ave, Coconut Grove, <br />
            Merric Way, FL 12345
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaWhatsapp />
          <span>+123-456-789</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>sales@ksphere.com</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-3 2lg:col-span-1">
        <h5 className="font-bold text-ks-white">Remain updated</h5>
        <div className="flex flex-col gap-3">
          <input
            className="p-3 w-full"
            type="email"
            placeholder="Your email address"
          />
          <KsBeigeButton text="Sing up" />
        </div>
      </div>
      <div className="flex justify-around col-span-3 mt-5">
        <span>&copy;2024. All rights reserved</span>
        <span>Design by LukeRM</span>
      </div>
    </footer>
  );
};

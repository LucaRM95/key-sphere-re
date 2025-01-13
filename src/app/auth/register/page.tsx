import { AuthSNButton, RegisterForm, TextAnimation } from "@/auth";
import { HorizontalSeparator } from "@/components";
import Link from "next/link";
import { FaApple, FaCirclePlay, FaFacebookF, FaGoogle } from "react-icons/fa6";

export default function RegisternPage() {
  return (
    <div className="h-screen bg-[url('/images/building-image.jpg')] bg-cover bg-no-repeat md:bg-[#ffff]">
      <div className="flex h-screen md:justify-center bg-gradient-to-b from-black/20 to-black">
        <div
          className={`
            flex flex-col items-center justify-around 
            h-screen pt-20 px-10 w-full
            md:w-[60%] lg:w-[40%] xl:w-[30%]
            `}
        >
          <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl font-bold mb-10">Signup</h1>
            <RegisterForm />
            <div className="flex items-center justify-center gap-[16px] w-full mb-[15px] mt-[30px]">
              <HorizontalSeparator color="ks-white" opacity={false} />
              <span className="w-full text-center">Or signup with</span>
              <HorizontalSeparator color="ks-white" opacity={false} />
            </div>
            <div className="flex gap-5 w-full">
              <AuthSNButton id="google" icon={<FaGoogle size={20} />} />
              <AuthSNButton id="apple" icon={<FaApple size={25} />} />
              <AuthSNButton id="facebook" icon={<FaFacebookF size={20} />} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Already have an account!</span>
            <Link href="/auth/login" className="text-ks-green font-semibold">
              Login
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-[40%] lg:items-center lg:justify-center">
          <TextAnimation />
          <div className="flex items-center justify-center gap-2 bg-ks-green/35 p-2 rounded-lg">
            <FaCirclePlay size={30} />
            <span>Start searching for you new life with us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

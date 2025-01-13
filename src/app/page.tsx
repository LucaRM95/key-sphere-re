import { HeroSection, Topbar, Footer, CTASection, Highlights, OurTeam } from "@/properties";
import { KsBeigeButton } from "@/components";
import { getProperties } from "@/properties/actions/properties-actions";
import { auth } from "@/auth.config";

export default async function Home() {
  const session = await auth();
  const properties = await getProperties({ take: 4 });
  
  return (
    <div className="flex flex-col bg-ks-white">
      <header className="relative bg-[url('/images/fancy-house.jpg')] bg-cover bg-center h-[480px] lg:h-[680px]">
        <Topbar withoutBg session={session} />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-center text-white p-5">
          <h1 className="text-4xl font-bold">
            Buy, Sell and Rent your property in one place!
          </h1>
          <p className="text-sm mt-2">
            There are not many cities that have experienced such social and
            political extremes in recent history as much as Amsterdam.
          </p>
        </div>
      </header>
      <div className="lg:absolute lg:top-[38.5rem] lg:left-[10%] lg:w-[880px] lg:p-10 flex flex-wrap items-center justify-around lg:justify-between gap-5 bg-ks-dark p-5">
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">Looking for</option>
          <option className="text-ks-dark">Buy</option>
          <option className="text-ks-dark">Rent</option>
        </select>
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">City</option>
          <option className="text-ks-dark">Miami</option>
          <option className="text-ks-dark">San Francisco</option>
        </select>
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">Price Limit</option>
          <option className="text-ks-dark">$100k-$300k</option>
          <option className="text-ks-dark">$300k-$500k</option>
        </select>
        <KsBeigeButton text="Search" />
      </div>

      <HeroSection properties={properties!} />
      <CTASection />
      <Highlights />
      <OurTeam />

      <Footer />
    </div>
  );
}

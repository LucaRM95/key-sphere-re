import { KSphereInput } from "@/components"


export const PropertyForm = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="bg-green-300 w-[5px] h-[5px] rounded-full"></div>
            <span className="text-green-300 text-[10px]">
              {"Turn Your Property Into Profit".toUpperCase()}
            </span>
          </div>
          <span className="text-2xl font-bold">List It Here and Reach Thousands Today!</span>
        </div>
        <form className="">
            <KSphereInput type="text" title="Property Title" placeholder="Edinburgh Old Town Flat" required/>
            <KSphereInput type="text" title="Address" placeholder="Royal Mile 200" required/>
            <KSphereInput type="text" title="Address" placeholder="Royal Mile 200" required/>
        </form>
    </div>
  )
}

/**
 * {
        title: "Edinburgh Old Town Flat",
        address: "Royal Mile 200",
        description: "Spacious flat in Edinburgh's historic Old Town.",
        lat: 55.9533, // Edinburgh, Scotland, UK
        lng: -3.1883,
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587527893189-8ed2d3edd54b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        type: "flat",
        status: "sale",
        isActive: true,
        price: 600000,
        area: 120,
        ownerId: ownerMap["owner10-id"],
      },
 */
interface Props {
  image: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  size: string;
  location: string;
  className: string;}

export const  PropertyCard = ({ image, title, price, beds, baths, size, location, className }: Props) => {
    return (
      <div className={`shadow rounded-xl overflow-hidden xl:w-80 bg-white ${className}`}>
        <div
          className="h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{price}</p>
          <p className="text-xs text-gray-500">
            {beds} beds · {baths} baths · {size}
          </p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    );
  }
  
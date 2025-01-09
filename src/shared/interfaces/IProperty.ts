export interface Property {
  id?: string;
  title: string;
  address: string;
  description: string;
  lat: number;
  lng: number;
  images: Array<string>;
  beds: number;
  baths: number;
  type: string;
  status: string;
  isActive: boolean;
  price: number;
  area: number;
  userId?: string;
}

export interface Property {
  id: string;
  title: string;
  address: string;
  description: string;
  lat: number;
  lng: number;
  images: string[];
  type: string;
  status: string;
  isActive: boolean;
  price: number;
  area: number;
  createdAt: Date;
  updatedAt: Date;
  owner: Owner;
}

interface Owner {
  id: string;
  name: string;
  contact: string;
}

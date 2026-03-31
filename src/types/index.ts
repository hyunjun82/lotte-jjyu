export interface ApartmentData {
  name: string;
  nameEn: string;
  projectName: string;
  developer: string;
  constructor: string;
  location: string;
  totalUnits: number;
  totalBuildings: number;
  maxFloors: number;
  undergroundFloors: number;
  parkingTotal: number;
  parkingRatio: number;
  expectedMoveIn: string;
  subscriptionDate: string;
  tagline: string;
  subTagline: string;
  landArea: string;
  totalFloorArea: string;
  buildingArea: string;
  floorAreaRatio: string;
  buildingCoverageRatio: string;
  buildingType: string;
  additionalFacilities: string[];
  coordinates: { lat: number; lng: number };
  salesOfficeAddress: string;
  salesOfficePhone: string;
  salesOfficeHours: string;
}

export interface UnitType {
  id: string;
  name: string;
  exclusiveArea: number;
  commonArea: number;
  supplyArea: number;
  unitCount: number;
  bay: string;
  direction: string;
  floorPlanImage: string;
  features: string[];
}

export interface PricingInfo {
  typeId: string;
  typeName: string;
  supplyArea: number;
  priceRange: { min: number; max: number };
}

export interface PaymentSchedule {
  stage: string;
  percentage: number;
  date: string;
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  type: "photo" | "video" | "vr";
  title: string;
  src: string;
  thumbnail: string;
  category: string;
}

export interface Infrastructure {
  category: string;
  categoryIcon: string;
  items: { name: string; distance: string; time: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  labelEn: string;
}

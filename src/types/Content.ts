export interface Point {
  id: string;
  internalName: string;
  shortDescription: string;
  title: string;
  pointGroup: PointGroup;
}

export interface PointGroup {
  id: string;
  title: string;
  shortDescription: string;
  internalName: string;
}

export interface TourGroup {
  id: string;
  internalName: string;
  title: string;
}

export interface Notice {
  id: string;
  title: Nullable<string>;
  shortDescription: string;
  coverImageUrl: Nullable<string>;
}

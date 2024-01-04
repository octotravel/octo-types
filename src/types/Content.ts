export interface Point {
  id: string;
  internalName: string;
  shortDescription: string;
  title: string;
  pointGroup: PointGroup;
}

interface PointGroup {
  id: string;
  title: string;
  shortDescription: string;
  internalName: string;
}

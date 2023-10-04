export interface ResourceAlloctation {
  id: string;
  resourceGroupId: string;
  resourceGroup: ResourceGroup;
  resourceId: string;
  resource: Resource;
  paxCount: number;
  seatIds: Array<string>;
  seats: Array<Seat>;
}

export interface ResourceGroup {
  id: string;
  title: string;
  split: boolean;
}

export interface Resource {
  id: string;
  title: string;
  seating: boolean;
  seats: Array<Seat>;
}

export interface Seat {
  id: string;
  title: string;
  column: number;
  row: number;
}

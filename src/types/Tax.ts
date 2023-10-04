export interface Tax {
  name: string;
  retail: number;
  original: number;
  net: Nullable<number>;
}

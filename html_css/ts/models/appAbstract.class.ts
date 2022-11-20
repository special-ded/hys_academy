import { Data } from "./interfaces.model";

export abstract class AppAbstract {
  abstract BASE_URL: string;
  abstract setSliderData<T>(albumId: T): Promise<Data[]>;
}
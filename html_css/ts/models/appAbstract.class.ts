import { Data } from "./interfaces.model";

export abstract class AppAbstract {
  protected abstract BASE_URL: string;
  protected abstract setSliderData<T>(albumId: T): Promise<Data[]>;
}
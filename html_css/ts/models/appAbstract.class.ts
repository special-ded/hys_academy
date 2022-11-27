import { Data } from "./interfaces.model";

export abstract class AppAbstract {
  protected BASE_URL: string = `https://jsonplaceholder.typicode.com/albums/`;
  protected abstract setSliderData<T>(albumId: T): Promise<Data[]>;
}
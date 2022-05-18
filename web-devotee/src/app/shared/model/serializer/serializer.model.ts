import { Resource } from "./resource.model";

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: any): any;
}

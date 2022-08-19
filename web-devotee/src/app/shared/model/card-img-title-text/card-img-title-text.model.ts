export class ModelCardImgTitleText implements IModelCardImgTitleText {
  id: string;
  icon?: string;
  title?: string;
  text?: string;
  constructor(
    id: string,
    icon?: string,
    title?: string,
    text?: string,
    ){
      this.id = id;
      this.icon = icon;
      this.text = text;
      this.title = title;
    }
}
export interface IModelCardImgTitleText {
  id: string;
  icon?: string;
  title?: string;
  text?: string;
}
interface defaultDataAnyway {
  id: string;
  label: string;
}

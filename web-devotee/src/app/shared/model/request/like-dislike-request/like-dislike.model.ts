export class ModelLikeDislikeRequest {
  user_id: number;
  type: string;
  constructor(
    user_id: number,
    type: string,
  ){
    this.user_id = user_id;
    this.type = type;
  }
}

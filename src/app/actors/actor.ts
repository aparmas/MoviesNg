export interface ActorCreateDto{
  name:string;
  birthDate:Date;
  image?:File;
}
export interface ActorDto{
  id:number;
  name:string;
  birthDate:Date;
  image?:string;
}

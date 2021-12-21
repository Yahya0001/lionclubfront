import {user} from './user'
import {users} from './users'
import { files} from './files';


export class Events {
  id : number;
  title: string;
  description : string ;
  date : string;
  type: string;
  place:string;
  document:any;
  created_at: string ;
}

export class Archive{

  id!: string;
  nom!: string;
  image!: string;
  nature!: string;
  date!: string;
  lieu!: string ;
  description! : string;
}

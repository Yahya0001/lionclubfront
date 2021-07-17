import {user} from './user'
import {users} from './users'
import { files} from './files';


export class Events {
  id : number;
  title: string;
  Description : string ;
  user : Array<user>;
  users: Array<users>;
  comments:Array <any>;
  files:Array<files>;
  start_date : string ;
  end_date: string ;
  event_type: string ;
  created_at: string ;
  
}

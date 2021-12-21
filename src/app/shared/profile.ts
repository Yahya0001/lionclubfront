
export class group{
    id : number ;
    name : string ;
    permissions : permission[];

}

export class permission {
   id : number ;
   name : string ;
   content_type : string ;
   codename : string ;
}
export class image {
    id : number ;
    name : string ;
    created_at : Date ;

}
export class pole {
    id : number ;
    name : string ;
    manager : number;
    codename : string

}

export class profile {
    id : number;
    name : string;
    email :string;
    password : string ;
    last_login : Date;
    date_joined : Date;
    photo : image ;
    telephone : string ;
    birthday : Date ;
    type : String;
    created_at : String;
    updated_at : String;
    email_verified_at: String;

            

}
export class user {
    id : number;
    username : string;
    first_name : string;
    last_name :string;
    email :string;
    gender : boolean;
    password : string ;
    groups : group[] ;
    image : image ;
    telephone : string ;
    birthdate : Date ;

}
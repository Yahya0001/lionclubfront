export interface file {
    id: number;
    name: string;
    created_at: Date;
}

export interface pole{
    id:number;
    name: string;
    manager: number;
    codename: string;
}

export interface image{
    id: number;
    name:string;
    created_at: Date;
}

export interface user_permissions{
    id: number;
    name: string;
    content_type: string;
    codename: string;
}

export interface member{
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    groups: group[];
    user_permissions: user_permissions[];
    is_staff: boolean;
    is_actif:boolean;
    is_superuser:boolean;
    last_login: Date;
    date_joined: Date;
    image: image;
    telephone: string;
    poles: pole[];
}

export interface group{
    id: number;
    name: string;
    permissions: user_permissions[];
}


export interface Project{
    id:number;
    name:string;
    description: string;
    dead_line: Date;
    pole: string;
    leader: member;
    members: member[];
    user: member;
    file: file[];
    date_created: Date;
}

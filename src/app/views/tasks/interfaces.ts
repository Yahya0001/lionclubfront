export interface IPermission {
    id: number;
    name: string;
    content_type: any;
    codename: string;
}

export interface IFile {
    id: number;
    name: string;
    created_at: Date;
}

export interface IPole {
    id: number;
    name: string;
    codename: string;
}

export interface IGroup {
    id: number;
    name: string;
    permissions: IPermission[];
}
export interface IProfile {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    groups: IGroup[];
    user_permissions: IPermission[];
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    last_login: Date;
    date_joined: Date;
    image: IFile;
    telephone: string;
    birthdate: Date;
    poles: IPole[];
}

export interface IComment {
    id: number;
    comment: string;
    files: IFile[];
    user: IProfile;
    post: any;
    post_type: string;
    created_at: Date;
}

export interface IEvent {
    id: number;
    title: string;
    description: string;
    user: IProfile;
    users: IProfile[];
    comments: IComment[];
    files: IFile[];
    date: Date;
    type: string;
    created_at: Date;
}

export interface IProject {
    id: number;
    name: string;
    description: string;
    files: IFile[];
    deadline: Date;
    pole: IPole;
    leader: IProfile;
    members: IProfile[];
    taches: ITask[];
    comments: IComment[];
    user: IProfile;
    created_at: Date;
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    users: IProfile[];
    project: number;
    status: string;
    deadline: Date;
    user: IProfile;
    files: IFile[];
    created_at: Date;
}
/* export interface ITask {
    id: number;
    title: string;
    projectId: number;
    projectTitle: string;
    description: string;
    imageURL: string;
    deadline: Date;
} */
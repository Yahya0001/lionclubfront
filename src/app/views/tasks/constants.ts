import { IGroup, IPermission, IFile, IProfile, IPole, IComment, IEvent, ITask, IProject } from './interfaces';

export const permissions: Array<IPermission> = [
    {
      "id": 1,
      "name": "view",
      "content_type": "XXXXXXXXXXX",
      "codename": "view"
    },
    {
      "id": 2,
      "name": "add",
      "content_type": "XXXXXXXXXXX",
        "codename": "add"
    },
    {
      "id": 3,
      "name": "change",
      "content_type": "XXXXXXXXXXX",
      "codename": "change"
    },
    {
      "id": 4,
      "name": "delete",
      "content_type": "XXXXXXXXXXX",
      "codename": "delete"
    }
];

export const groups: Array<IGroup> = [
    {
        "id": 1,
        "name": "bureau",
        "permissions": permissions
    },
    {
        "id": 2,
        "name": "RH",
        "permissions": permissions
    },
    {
        "id": 3,
        "name": "adjoint",
        "permissions": permissions
    },
    {
        "id": 4,
        "name": "chef_projet",
        "permissions": permissions
    },
    {
        "id": 5,
        "name": "membre",
        "permissions": permissions.slice(0, 1)
    }
];

export const files: Array<IFile> = [
    {
        "id": 1,
        "name": "profile_pic1",
        "created_at": new Date(2021, 3, 23)
    },
    {
        "id": 2,
        "name": "profile_pic2",
        "created_at": new Date(2021, 3, 23)
    },
    {
        "id": 3,
        "name": "profile_pic3",
        "created_at": new Date(2021, 3, 23)
    },
    {
        "id": 4,
        "name": "Comment1",
        "created_at": new Date(2021, 3, 26)
    },
    {
        "id": 5,
        "name": "Comment2",
        "created_at": new Date(2021, 3, 26)
    },
    {
        "id": 6,
        "name": "Comment3",
        "created_at": new Date(2021, 3, 26)
    },
    {
        "id": 7,
        "name": "Event1",
        "created_at": new Date(2021, 3, 27)
    },
    {
        "id": 8,
        "name": "Event2",
        "created_at": new Date(2021, 3, 27)
    },
    {
        "id": 9,
        "name": "Event3",
        "created_at": new Date(2021, 3, 27)
    },
    {
        "id": 10,
        "name": "Project1",
        "created_at": new Date(2021, 3, 28)
    },
    {
        "id": 11,
        "name": "Project2",
        "created_at": new Date(2021, 3, 28)
    },
    {
        "id": 12,
        "name": "Project3",
        "created_at": new Date(2021, 3, 28)
    }
];

export const poles: Array<IPole> = [
    {
      "id": 1,
      "name": "Relations humaines",
      "codename": "RH"
    },
    {
      "id": 2,
      "name": "Developement commercial",
      "codename": "Devcom"
    },
    {
      "id": 3,
      "name": "Marketing et communication",
      "codename": "Com"
    },
    {
      "id": 4,
      "name": "Projet",
      "codename": "Projet"
    }
];

export const profiles: Array<IProfile> = [
    {
        "id": 1,
        "username": "user1",
        "first_name": "first_name1",
        "last_name": "last_name1",
        "email": "email1@gmail.com",
        "password": "password1",
        "groups": groups.slice(0, 1),
        "user_permissions": permissions,
        "is_staff": true,
        "is_active": true,
        "is_superuser": false,
        "last_login": new Date(2021, 3, 23, 15, 3, 15),
        "date_joined": new Date(2021, 3, 23),
        "image": files[0],
        "telephone": "40325698",
        "birthdate": new Date(1998, 5, 21),
        "poles": [poles[0], poles[3]],
    },
    {
        "id": 2,
        "username": "user2",
        "first_name": "first_name2",
        "last_name": "last_name2",
        "email": "email2@gmail.com",
        "password": "password2",
        "groups": groups.slice(0, 2),
        "user_permissions": permissions,
        "is_staff": true,
        "is_active": false,
        "is_superuser": true,
        "last_login": new Date(2021, 3, 22, 12, 3, 15),
        "date_joined": new Date(2021, 3, 21),
        "image": files[1],
        "telephone": "42325698",
        "birthdate": new Date(1997, 7, 21),
        "poles": [poles[2]],
    },
    {
        "id": 3,
        "username": "user3",
        "first_name": "first_name3",
        "last_name": "last_name3",
        "email": "email3@gmail.com",
        "password": "password3",
        "groups": groups.slice(4, ),
        "user_permissions": permissions,
        "is_staff": false,
        "is_active": true,
        "is_superuser": false,
        "last_login": new Date(2021, 3, 24, 15, 15, 35),
        "date_joined": new Date(2021, 3, 23),
        "image": files[2],
        "telephone": "41325698",
        "birthdate": new Date(1999, 9, 3),
        "poles": [poles[1]],
    }
];

export const comments: Array<IComment> = [
    {
        "id": 1,
        "comment": "Good job, but you can do better!",
        "files": [files[3]],
        "user": profiles[0],
        "post": "XXXXXXXXXXXXXXXXXXX",
        "post_type": "XXXXXXXXXXXXXXXX",
        "created_at": new Date(2021, 3, 25, 17, 46, 0)
      },
      {
        "id": 2,
        "comment": "I like that!",
        "files": [files[4]],
        "user": profiles[1],
        "post": "XXXXXXXXXXXXXXXXXXX",
        "post_type": "XXXXXXXXXXXXXXXX",
        "created_at": new Date(2021, 3, 25, 17, 46, 0)
      },
      {
        "id": 3,
        "comment": "You only have 1 day to deliver you work!",
        "files": [files[5]],
        "user": profiles[2],
        "post": "XXXXXXXXXXXXXXXXXXX",
        "post_type": "XXXXXXXXXXXXXXXX",
        "created_at": new Date(2021, 3, 25, 17, 46, 0)
      }
];

export const events: Array<IEvent> = [
    {
        "id": 1,
        "title": "Formation Flutter",
        "description": "Formation dans le framework de developpement mobile Flutter présenté par Mr. John Doe le 01-05-2021",
        "user": profiles[0],
        "users": profiles,
        "comments": comments,
        "files": [files[6]],
        "date": new Date(2021, 4, 1),
        "type": "formation",
        "created_at": new Date(2021, 3, 25)
      },
      {
        "id": 2,
        "title": "Assemblée generale",
        "description": "Assemblée générale pour tous les membres de SJE pour discuter les évènements prochaines et nos projets les plus récents",
        "user": profiles[1],
        "users": profiles,
        "comments": comments.slice(1),
        "files": [files[7]],
        "date": new Date(2021, 4, 15),
        "type": "Réunion",
        "created_at": new Date(2021, 3, 29)
      },
      {
        "id": 3,
        "title": "Sortie vers Sidi Bousaid",
        "description": "Une sortie organisée vers Sidi Bousaid",
        "user": profiles[2],
        "users": profiles,
        "comments": [comments[0], comments[2]],
        "files": [files[8]],
        "date": new Date(2021, 4, 25),
        "type": "Sortie",
        "created_at": new Date(2021, 4, 3)
      }
];

export const tasks: Array<ITask> = [
    {
      "id": 1,
      "title": "Finir le cahier de charge",
      "description": "Réaliser le cahier de charge concerenant le projet: Platforme RH, avec tous les fonctionnalités discutés dans la réunion précédante",
      "users": profiles.slice(0, 2),
      "project": 1,
      "status": "In progress",
      "deadline": new Date(2021, 4, 1),
      "user": profiles[0],
      "files": [files[9]],
      "created_at": new Date(2021, 3, 2)
    },
    {
      "id": 2,
      "title": "Finir la conception",
      "description": "Réaliser la conception concerenant le projet: Platforme RH, avec respectant les fonctionnalités spécifiés dans le cahier de charge",
      "users": profiles,
      "project": 2,
      "status": "Pending",
      "deadline": new Date(2021, 4, 10),
      "user": profiles[1],
      "files": [files[10]],
      "created_at": new Date(2021, 3, 5)
    },
    {
      "id": 3,
      "title": "Finir le desing du site",
      "description": "Réaliser le design du site en prenant en compte les fontionnalités spécifiés dans le cahier de charge et la conception",
      "users": [profiles[0], profiles[2]],
      "project": 3,
      "status": "In progress",
      "deadline": new Date(2021, 4, 15),
      "user": profiles[2],
      "files": [files[11]],
      "created_at":new Date(2021, 3, 1)
    }
];

export const projects: Array<IProject> = [
    {
        "id": 1,
        "name": "platforme RH",
        "description": "Développer une platforme pour l'administration de SJE et pour gerer les relations humaines",
        "files": [files[8]],
        "deadline": new Date(2021, 4, 15),
        "pole": poles[3],
        "leader": profiles[0],
        "members": profiles,
        "taches": [tasks[0]],
        "comments": [comments[0]],
        "user": profiles[0],
        "created_at": new Date(2021, 2, 23)
    },
    {
        "id": 2,
        "name": "Site e-commerce",
        "description": "Déveloper un site pour gérer des ventes en ligne",
        "files": [files[9]],
        "deadline": new Date(2021, 4, 15),
        "pole": poles[3],
        "leader": profiles[1],
        "members": profiles,
        "taches": [tasks[1]],
        "comments": [comments[1]],
        "user": profiles[1],
        "created_at": new Date(2021, 3, 1)
    },
    {
        "id": 3,
        "name": "Site SJE",
        "description": "Développer un site web pour SJE",
        "files": [files[10]],
        "deadline": new Date(2021, 4, 15),
        "pole": poles[0],
        "leader": profiles[2],
        "members": profiles,
        "taches": [tasks[2]],
        "comments": [comments[2]],
        "user": profiles[2],
        "created_at": new Date(2021, 2, 29)
    }
];
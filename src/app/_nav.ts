import { INavData } from '@coreui/angular';
var navItems_ :  INavData[];

if(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).type != "0"){
    navItems_ = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      /* badge: {
        variant: 'info',
        text: 'NEW'
      }*/
    },
   
    {
      title: true,
      name: 'Member space'
    },
    // {
    //   name: 'Projet',
    //   url: '/projet',
    //   icon: 'icon-layers'
      
    // },
    {
      name: 'Membre',
      url: '/user',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Créer un membre',
          url: '/user/colors',
          icon: 'icon-pencil'
        },
        {
          name: 'Afficher les membres',
          url: '/user/affiche',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Events',
      url: '/event',
      icon: 'icon-puzzle',
      children: [
        
        {
          name: 'add event ',
          url: '/event/create',
          icon: 'icon-pencil'
        },
        {
          name: 'events archive',
          url: '/event/all',
          icon: 'icon-cursor'
        },
        {
          name: 'calendrier ',
          url: '/event/calendrier',
          icon: 'icon-layers'
        },
      ]
    },
    {
      name: 'Articles',
      url: '/article',
      icon: 'icon-star',
      children: [
        
        {
          name: 'add article ',
          url: '/article/create',
          icon: 'icon-pencil'
        },
        {
          name: 'articles archive',
          url: '/article/all',
          icon: 'icon-cursor'
        },
        
      ]
    },
    {
      name: 'Documents Archive',
      url: '/archive',
      icon: 'icon-layers',
      children: [
        
        {
          name: 'add document ',
          url: '/archive/create',
          icon: 'icon-pencil'
        },
        {
          name: 'archive list',
          url: '/archive/all',
          icon: 'icon-layers'
        },
        
      ]
    },
  
  
  ];
 }else {
   navItems_ = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      /* badge: {
        variant: 'info',
        text: 'NEW'
      }*/
    },
   
    {
      title: true,
      name: 'Member space'
    },
    // {
    //   name: 'Projet',
    //   url: '/projet',
    //   icon: 'icon-layers'
      
    // },
    {
      name: 'Membre',
      url: '/user',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Afficher les membres',
          url: '/user/affiche',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Events',
      url: '/event',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'events archive',
          url: '/event/all',
          icon: 'icon-cursor'
        },
        {
          name: 'calendrier ',
          url: '/event/calendrier',
          icon: 'icon-layers'
        },
      ]
    },
    {
      name: 'Articles',
      url: '/article',
      icon: 'icon-star',
      children: [
        
        {
          name: 'articles archive',
          url: '/article/all',
          icon: 'icon-cursor'
        },
        
      ]
    },
    {
      name: 'Documents Archive',
      url: '/archive',
      icon: 'icon-layers',
      children: [
        {
          name: 'archive list',
          url: '/archive/all',
          icon: 'icon-layers'
        },
        
      ]
    },
  
  
  ];
 }
export const navItems = navItems_ ;
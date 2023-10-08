export default [{
    title: 'Tableau de bord',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Adresses',
    icon: 'ClipboardIcon',
    // tag: 'new',
    tagVariant: 'light-success',
    children: [{
        title: 'Tous',
        route: 'adresses',
      },
      {
        title: 'En cours',
        route: 'adresses-encours',
      },
      {
        title: 'Actif',
        route: 'adresses-actif',
      },
      {
        title: 'Inactif',
        route: 'adresses-inactif',
      },
      {
        title: 'Suspendu',
        route: 'adresses-suspendu',
      },
      {
        title: 'Traiter',
        route: 'adresses-traitement',
      },
    ],
  },
  {
    title: 'Services',
    route: 'services',
    icon: 'FileIcon',
  },
]
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
        title: 'A jours',
        route: 'adresses-actif',
      },
      {
        title: 'Inactif',
        route: 'adresses-inactif',
      }
    ],
  },
  {
    title: 'Gestionnaires',
    route: 'admins',
    icon: 'UserIcon',
  },
]
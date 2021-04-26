export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'MES SERVICES',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'ETAT CIVIL',
            to: '/'
          },
          {
            name: 'URBANISME',
            to: '/'
          },
          {
            name: 'PRENDRE RENDEZ-VOUS',
            to: '/'
          }, 
          {
            name: 'MES DOCUMENTS',
            to: '/'
          },
          {
            name: 'MES PROCEDURES',
            to: '/'
          },
          {
            name: 'NOUS CONTACTER',
            to: '/'
          },
          {
            name: 'VOTRE MAIRIE',
            to: '/'
          }
        ]
      },
    ]
  }
]
export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628791bdc402690d1a540ee2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-th1ymwn5',
                  apiId: 'ee26780a-53b3-40ac-ba2a-96956bf0f89e'
                },
                {
                  buildHookId: '628791be34a574005e56fb36',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uq9v8ej8',
                  apiId: '69fc9ae4-d338-4555-956b-fd17f9fce1a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Richjerk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uq9v8ej8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

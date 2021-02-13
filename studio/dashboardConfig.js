export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6027f2451a7fec695258de63',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e1xbp4ub',
                  apiId: '1ebb7dfd-6d9b-40ba-98e1-681ec45f3d7c'
                },
                {
                  buildHookId: '6027f24524ed4f70487b5c91',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-njiayzak',
                  apiId: '77f4cb4f-a2dd-49e1-9fb7-210c2e299cc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rcaracaus/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-njiayzak.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

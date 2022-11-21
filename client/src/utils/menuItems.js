export const menuItems = [

    {
      folderName: 'Root',
      url: '/',
      id:1,
      subitems: [
        {
          id:11,
          folderName: 'web design',
          url: 'web-design',
        },
        {
          id:12,
          folderName: 'web development',
          url: 'web-dev',
          subitems: [
            {
              id:21,
              folderName: 'Frontend',
              url: 'frontend',
            },
            {
              id:22,
              folderName: 'Backend',
              subitems: [
                {
                  id:31,
                  folderName: 'NodeJS',
                  url: 'node',
                },
                {
                  id:33,
                  folderName: 'PHP',
                  url: 'php',
                },
              ],
            },
          ],
        },
        {
          id:222,
          folderName: 'SEO',
          url: 'seo',
        },
      ],
    },
  ];
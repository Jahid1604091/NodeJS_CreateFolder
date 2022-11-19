export const menuItems = [

    {
      title: 'Root',
      url: '/',
      id:1,
      submenu: [
        {
          id:11,
          title: 'web design',
          url: 'web-design',
        },
        {
          id:12,
          title: 'web development',
          url: 'web-dev',
          submenu: [
            {
              id:21,
              title: 'Frontend',
              url: 'frontend',
            },
            {
              id:22,
              title: 'Backend',
              submenu: [
                {
                  id:31,
                  title: 'NodeJS',
                  url: 'node',
                },
                {
                  id:33,
                  title: 'PHP',
                  url: 'php',
                },
              ],
            },
          ],
        },
        {
          id:222,
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
  ];
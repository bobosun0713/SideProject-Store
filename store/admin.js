export const state = () => ({
  menuList: [
    {
      name: '產品相關',
      icon: 'sticky-note',
      link: '/admin/product',
      children: [
        {
          name: '產品列表',
          icon: 'list-alt',
          link: '/admin/product/list',
        },
        {
          name: '新增產品',
          icon: 'pencil-alt',
          link: '/admin/product/add',
        },
      ],
    },
    {
      name: '管理員相關',
      icon: 'user-alt',
      link: './admin/user',
      children: [
        {
          name: '管理員列表',
          icon: 'list-alt',
          link: '/admin/user/list',
        },
        {
          name: '新增管理員',
          icon: 'pencil-alt',
          link: '/admin/user/add',
        },
      ],
    },
    { name: 'GitHub', icon: 'code-branch', link: 'https://github.com/bobosun0713/SideProject-Store' },
  ],
})

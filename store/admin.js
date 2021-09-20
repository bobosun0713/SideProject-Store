export const state = () => ({
  menuList: [
    {
      name: '訂單相關',
      icon: 'clipboard-list',
      link: './admin/order',
      children: [
        {
          name: '訂單列表',
          icon: 'list-alt',
          link: '/admin/order/list',
        },
      ],
    },
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
      name: '會員相關',
      icon: 'user-alt',
      link: './admin/user',
      children: [
        {
          name: '會員列表',
          icon: 'list-alt',
          link: '/admin/user/list',
        },
      ],
    },
    {
      name: '管理員相關',
      icon: 'users-cog',
      link: './admin/controller',
      children: [
        {
          name: '管理員列表',
          icon: 'list-alt',
          link: '/admin/controller/list',
        },
        {
          name: '新增管理員',
          icon: 'pencil-alt',
          link: '/admin/controller/add',
        },
      ],
    },
    { name: 'GitHub', icon: 'code-branch', link: 'https://github.com/bobosun0713/SideProject-Store' },
  ],
})

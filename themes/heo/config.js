const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-04-07', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的赛博空间', url: 'https://blog.cnrowe.cn' },
    { title: '我是赛博道人，这里分享我的学习笔记'},
    { title: 'NAS、Docker、虚拟化、网络、安防等相关技术'},
    { title: '更多赛博内容，欢迎订阅我的频道，谢谢！'},
  ],
    // 英雄区左右侧组件颠倒位置
    HEO_HERO_REVERSE: false,
    // 博客主体区左右侧组件颠倒位置
    HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享技术',
  HERO_TITLE_2: '与赛博认知',
  HERO_TITLE_3: 'BLOG.CNROWE.CN',
  HERO_TITLE_4: 'CN-大表哥',
  HERO_TITLE_5: 'GitHub',
  HERO_TITLE_LINK: 'https://github.com/CoryRowe',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' }, // 对应notion数据库中的“tag”栏，添加“必看精选”的选项即可启用
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' }, // 对应notion数据库中的“tag”栏，添加“热门文章”的选项即可启用
  HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' }, // 对应notion数据库中的“tag”栏，添加“实用教程”的选项即可启用

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  HERO_RECOMMEND_COVER: '/images/heo/wallhaven-m3z7m9.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '💗 分享与热心帮助',
    '🏃 脚踏实地行动派',
    '💠 Docker 小能手',
    '💻 IT 赛博达人',
    '📂 NAS 存储爱好者'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/CoryRowe/NotionNext', // 个人资料底部按钮链接

  // 英雄区用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'network',
      img_1: '/images/heo/network.png',
      color_1: '#cfe2f3',
      title_2: 'linux',
      img_2: '/images/heo/linux.png',
      color_2: '#d9d9d9'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/docker.webp',
      color_1: '#57b6e6',
      title_2: 'k8s',
      img_2: '/images/heo/k8s.png',
      color_2: '#1f1f1f'
    },
    {
      title_1: 'server',
      img_1: '/images/heo/server.png',
      color_1: '#cccccc',
      title_2: 'Drive',
      img_2: '/images/heo/OneDrive.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'MySQL',
      img_1: '/images/heo/MySQL.png',
      color_1: '#eb6840',
      title_2: 'VMware',
      img_2: '/images/heo/VMware.png',
      color_2: '#d9ead3'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HNAS',
      img_2: '/images/heo/NAS.png',
      color_2: '#989bf8'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Firewall',
      img_2: '/images/heo/Firewalld2.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: true, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG

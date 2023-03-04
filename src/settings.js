module.exports = {
  title: 'Vue Element Admin',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   * 附加警告：如果使用dev启动并在此处改为prod，可能会导致页面白屏。
   * 如果你在此处改为dev，虽然能够正常浏览，但请千万不要点击错误日志按钮。似乎是因为错误日志本身也有问题，
   * 导致错误日志数量将会以2^n的速度增长使浏览器卡死。
   */
  errorLog: 'development'
}

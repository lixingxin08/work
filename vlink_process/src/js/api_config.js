// 导出域名
// export const domain = 'http://172.16.2.23:9095/';
export const domain = 'http://api.vlink.red';

// 默认导出整个接口配置
export default {
    // 账号管理
    login: `/gateway/facade/v1/account/user/login`,                           // 登陆   post
    logout: `/gateway/facade/v1/account/user/logout`,                         // 退出  post
    isSet: `/gateway/facade/v1/account/user/uid/exists`,                       // 检测手机 用户名 邮箱是否可用  get
    isRegister:`/gateway/facade/v1/account/user/register`, // 注册   post
   //赛程
   addGameRoad:`/gateway/facade/v1/competition/competition_process/api/ProcessApi/private_add.do`, //增加赛程 post
   getGameRoad:`/gateway/facade/v1/competition/competition_process/api/ProcessApi/public_get.do`,//获取赛程 get
   changeGameRoad:`/gateway/facade/v1/competition/competition_process/api/ProcessApi/private_modify.do`,//修改赛程
   deleteGameRoad:` /gateway/facade/v1/competition/competition_process/api/ProcessApi/private_delete.do`,//删除赛程
   //赛事
   addGame:`/gateway/facade/v1/competition/competition_process/api/EventApi/private_add.do`,//增加赛事 post
   getGame:`/gateway/facade/v1/competition/competition_process/api/EventApi/public_get.do`,//获取赛事 post
//  用户积分
    getPionts:`/gateway/facade/v1/score/private/score/user/total_score`,//获取用户积分  get
    getPiontsList:`/gateway/facade/v1/score/private/score/user/score_list?`,//获取用户积分列表  get
    getTask:`/private/score/user/task_info` ,                 //获取用户日常任务完成情况  get
    checkTask:`/gateway/facade/v1/score/private/score/user/attendance/check`, //用户检查日常签到情况  get
    addTask:`/gateway/facade/v1/score/private/score/user/attendance` ,//用户日常签到   get
    //用户
    getUsermsg:`/gateway/facade/v1/account/user/sync`  ,               //获取用户信息  post
    getVerify:`/gateway/facade/v1/account/user/bind/verify`,   //获取用户验证 绑定  post
    gettrigger :`/gateway/facade/v1/account/user/bind/trigger`,  //获取用户验证码请求 post
    //新闻 快讯
    getNews:`gateway/facade/v1/news/public/news_type/1/activity_id/2`, //获取新闻列表  get
    getFlash:`gateway/facade/v1/news/public/news_type/2/activity_id/2`, //获取快讯列表  get 
    postNews:`/gateway/facade/v1/news/private/news/news_type/1/publish`  ,//发布新闻 post
    postFlash:`/gateway/facade/v1/news/private/news/news_type/2/publish`  ,//发布快讯post 
   deleteNews:`/gateway/facade/v1/news/private/delete/news/<int:news_id>`,//删除新闻  get
   deleteFlash:`/gateway/facade/v1/news/private/news/2/delete`,//删除快讯  get
    getNewsDatail:`/gateway/facade/v1/news/private/news/news_item/1`,//获取新闻详情 get
    getFlashDatail:`/gateway/facade/v1/news/private/news/news_item/2`,//获取快讯详情 get
    getNewsAgree:`/gateway/facade/v1/news/private/news/agree/<int:news_id>` ,//用户点赞新闻 get
    getNewsShare:`/gateway/facade/v1/news/private/news/share/<int:news_id>` , //用户分享新闻 get
    getNewsComment:`/gateway/facade/v1/news/public/news/news_item/comment/<int:news_id>?page_num=`,//根据新闻id获取新闻的评论列表get
    postNewsComment:`/gateway/facade/v1/news/private/news/comment/publish?p_comment_id=`,//用户评论新闻 post
    deleteNewsComment:`/gateway/facade/v1/news/private/news/comment/delete`,//用户删除评论 post
    getNewsUpdata:`/gateway/facade/v1/news/private/news/<int:news_id>/news_type/<int:news_type>/update`,//更新新闻post


    isLogin:[false],  //登录开关
    telphoto:'86' ,     //地区号码前缀
    cellphone:"",  //手机号码
    nocaptcha:{sessionid:'',signature:'',token:'',scene:''},  //滑块
    showIt:[false],  //弹窗开关
    gameRoad:["GBA","GBA","BBB","AAA"], //赛程名字
    token:"" , //token
    integral:"1235",//积分总数
    voted:[0,0,0] , //投票次数 点赞次数  分享次数
};

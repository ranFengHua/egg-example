'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async currentUser() {
    const { ctx } = this;
    ctx.body = {
      name: 'fenghua.ran',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容奶大',
      title: '交互专家',
      group: 'ig首席打野',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 771 号',
      phone: '0752-268888888',
    };
  }
  async menu() {
    const { ctx } = this;
    console.log('hi, egg');
    ctx.body = { code: 200, message: null, data: [{ path: '/',
      name: 'welcome',
      icon: 'icon-favorites' }, { type: 'subMenu', parentCode: '', menuCode: 'data-a', name: '数据中心', sortNo: 2, icon: 'icon-gift', path: '/data-a', children: [{ type: 'subMenu', parentCode: 'data-a', menuCode: 'yzd', name: '颜值贷', sortNo: 2, icon: '', path: '/data-a/yzd', children: [{ type: 'item', parentCode: 'yzd', menuCode: 'photograph', name: '用户照片', sortNo: 2, icon: '', path: '/data-a/yzd/photograph', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'data-a', menuCode: 'tmd-a', name: '天美贷', sortNo: 3, icon: '', path: '/data-a/tmd-a', children: [{ type: 'item', parentCode: 'tmd-a', menuCode: 'photograph-t', name: '用户照片', sortNo: 1, icon: '', path: '/data-a/tmd-a/photograph-t', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'data-a', menuCode: 'lfq-d', name: '领分期', sortNo: 3, icon: '', path: '/data-a/lfq-d', children: [{ type: 'item', parentCode: 'lfq-d', menuCode: 'photograph-dl', name: '用户照片', sortNo: 1, icon: '', path: '/data-a/lfq-d/photograph-dl', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'data-a', menuCode: 'mz-d', name: '放心呗', sortNo: 4, icon: '', path: '/data-a/mz-d', children: [{ type: 'item', parentCode: 'mz-d', menuCode: 'photograph-dm', name: '用户照片', sortNo: 1, icon: '', path: '/data-a/mz-d/photograph-dm', children: [], home: false }], home: false }], home: false }, { type: 'subMenu', parentCode: null, menuCode: 'collection', name: '催收中心', sortNo: 3, icon: 'icon-component', path: '/collection', children: [{ type: 'subMenu', parentCode: 'collection', menuCode: 'yzd-a', name: '颜值贷', sortNo: 1, icon: null, path: '/collection/yzd-a', children: [{ type: 'item', parentCode: 'yzd-a', menuCode: 'case', name: '催收案件库', sortNo: 1, icon: null, path: '/collection/yzd-a/case', children: [], home: false }, { type: 'item', parentCode: 'yzd-a', menuCode: 'user-a', name: '待催用户列表', sortNo: 2, icon: null, path: '/collection/yzd-a/user-a', children: [], home: false }, { type: 'item', parentCode: 'yzd-a', menuCode: 'workBench', name: '催收工作台', sortNo: 3, icon: null, path: '/collection/yzd-a/workBench', children: [], home: false }, { type: 'item', parentCode: 'yzd-a', menuCode: 'panel', name: '催收看板', sortNo: 4, icon: null, path: '/collection/yzd-a/panel', children: [], home: false }, { type: 'item', parentCode: 'yzd-a', menuCode: 'sms', name: '催收短信模板', sortNo: 5, icon: null, path: '/collection/yzd-a/sms', children: [], home: false }, { type: 'item', parentCode: 'yzd-a', menuCode: 'config', name: '参数配置', sortNo: 6, icon: null, path: '/collection/yzd-a/config', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'collection', menuCode: 'lfq-a', name: '领分期', sortNo: 2, icon: null, path: '/collection/lfq-a', children: [{ type: 'item', parentCode: 'lfq-a', menuCode: 'case-b', name: '催收案件库', sortNo: 1, icon: null, path: '/collection/lfq-a/case-b', children: [], home: false }, { type: 'item', parentCode: 'lfq-a', menuCode: 'coll_user', name: '待催用户列表', sortNo: 2, icon: null, path: '/collection/lfq-a/user', children: [], home: false }, { type: 'item', parentCode: 'lfq-a', menuCode: 'sms-s', name: '催收短信模板', sortNo: 3, icon: null, path: '/collection/lfq-a/sms-s', children: [], home: false }, { type: 'item', parentCode: 'lfq-a', menuCode: 'panel-s', name: '催收看板', sortNo: 4, icon: null, path: '/collection/lfq-a/panel-s', children: [], home: false }, { type: 'item', parentCode: 'lfq-a', menuCode: 'workBench-s', name: '催收工作台', sortNo: 5, icon: null, path: '/collection/lfq-a/workBench-s', children: [], home: false }, { type: 'item', parentCode: 'lfq-a', menuCode: 'config-s', name: '参数配置', sortNo: 6, icon: null, path: '/collection/lfq-a/config-s', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'collection', menuCode: 'tmd', name: '天美贷', sortNo: 3, icon: null, path: '/collection/tmd', children: [{ type: 'item', parentCode: 'tmd', menuCode: 'case-t', name: '催收案件库', sortNo: 1, icon: '', path: '/collection/tmd/case-t', children: [], home: false }, { type: 'item', parentCode: 'tmd', menuCode: 'user-k', name: '待催用户列表', sortNo: 2, icon: '', path: '/collection/tmd/user-k', children: [], home: false }, { type: 'item', parentCode: 'tmd', menuCode: 'workBench-t', name: '催收工作台', sortNo: 3, icon: '', path: '/collection/tmd/workBench-t', children: [], home: false }, { type: 'item', parentCode: 'tmd', menuCode: 'panel-t', name: '催收看板', sortNo: 4, icon: '', path: '/collection/tmd/panel-t', children: [], home: false }, { type: 'item', parentCode: 'tmd', menuCode: 'sms-t', name: '催收短信模板', sortNo: 5, icon: '', path: '/collection/tmd/sms-t', children: [], home: false }, { type: 'item', parentCode: 'tmd', menuCode: 'config-t', name: '参数配置', sortNo: 6, icon: '', path: '/collection/tmd/config-t', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'collection', menuCode: 'mz', name: '放心呗', sortNo: 4, icon: '', path: '/collection/mz', children: [{ type: 'item', parentCode: 'mz', menuCode: 'case-m', name: '催收案件库', sortNo: 1, icon: '', path: '/collection/mz/case-m', children: [], home: false }, { type: 'item', parentCode: 'mz', menuCode: 'user-m', name: '待催用户列表', sortNo: 2, icon: '', path: '/collection/mz/user-m', children: [], home: false }, { type: 'item', parentCode: 'mz', menuCode: 'workbench-m', name: '催收工作台', sortNo: 3, icon: '', path: '/collection/mz/workbench-m', children: [], home: false }, { type: 'item', parentCode: 'mz', menuCode: 'panel-m', name: '催收看板', sortNo: 4, icon: '', path: '/collection/mz/panel-m', children: [], home: false }, { type: 'item', parentCode: 'mz', menuCode: 'sms-m', name: '催收短信模板', sortNo: 5, icon: '', path: '/collection/mz/sms-m', children: [], home: false }, { type: 'item', parentCode: 'mz', menuCode: 'config-m', name: '参数配置', sortNo: 6, icon: '', path: '/collection/mz/config-m', children: [], home: false }], home: false }], home: false }, { type: 'subMenu', parentCode: '', menuCode: 'user', name: '用户中心', sortNo: 3, icon: 'icon-bussiness-man', path: '/user', children: [{ type: 'subMenu', parentCode: 'user', menuCode: 'lfq-u', name: '领分期', sortNo: 1, icon: '', path: '/user/lfq-u', children: [{ type: 'item', parentCode: 'lfq-u', menuCode: 'list-ul', name: '用户列表', sortNo: 1, icon: '', path: '/user/lfq-u/list-ul', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'user', menuCode: 'yzd-u', name: '颜值贷', sortNo: 2, icon: '', path: '/user/yzd-u', children: [{ type: 'item', parentCode: 'yzd-u', menuCode: 'list', name: '用户列表', sortNo: 1, icon: '', path: '/user/yzd-u/list', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'user', menuCode: 'tmd-u', name: '天美贷', sortNo: 3, icon: '', path: '/user/tmd-u', children: [{ type: 'item', parentCode: 'tmd-u', menuCode: 'list-ut', name: '用户列表', sortNo: 1, icon: '', path: '/user/tmd-u/list-ut', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'user', menuCode: 'mz-m', name: '放心呗', sortNo: 4, icon: '', path: '/user/mz-m', children: [{ type: 'item', parentCode: 'mz-m', menuCode: 'list-mu', name: '用户列表', sortNo: 1, icon: '', path: '/user/mz-m/list-mu', children: [], home: false }], home: false }], home: false }, { type: 'subMenu', parentCode: '', menuCode: 'order', name: '订单中心', sortNo: 4, icon: 'icon-integral', path: '/order', children: [{ type: 'subMenu', parentCode: 'order', menuCode: 'yzd-o', name: '颜值贷', sortNo: 1, icon: '', path: '/order/yzd-o', children: [{ type: 'item', parentCode: 'yzd-o', menuCode: 'list-oy', name: '订单列表', sortNo: 1, icon: '', path: '/order/yzd-o/list-oy', children: [], home: false }, { type: 'item', parentCode: 'yzd-o', menuCode: 'offline-oy', name: '线下还款管理', sortNo: 2, icon: '', path: '/order/yzd-o/offline-oy', children: [], home: false }, { type: 'item', parentCode: 'yzd-o', menuCode: 'ol', name: '聚美订单', sortNo: 3, icon: '', path: '/order/yzd-o/ol', children: [], home: false }, { type: 'item', parentCode: 'yzd-o', menuCode: 'xtoffline', name: '信托线下还款', sortNo: 4, icon: '', path: '/order/yzd-o/xtoffline', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'order', menuCode: 'lfq-o', name: '领分期', sortNo: 2, icon: '', path: '/order/lfq-o', children: [{ type: 'item', parentCode: 'lfq-o', menuCode: 'list-ol', name: '订单列表', sortNo: 1, icon: '', path: '/order/lfq-o/list-ol', children: [], home: false }, { type: 'item', parentCode: 'lfq-o', menuCode: 'offline-ol', name: '线下还款管理', sortNo: 2, icon: '', path: '/order/lfq-o/offline-ol', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'order', menuCode: 'tmd-o', name: '天美贷', sortNo: 3, icon: '', path: '/order/tmd-o', children: [{ type: 'item', parentCode: 'tmd-o', menuCode: 'list-ot', name: '订单列表', sortNo: 1, icon: '', path: '/order/tmd-o/list-ot', children: [], home: false }, { type: 'item', parentCode: 'tmd-o', menuCode: 'offline-ot', name: '线下还款管理', sortNo: 2, icon: '', path: '/order/tmd-o/offline-ot', children: [], home: false }], home: false }, { type: 'subMenu', parentCode: 'order', menuCode: 'mz-o', name: '放心呗', sortNo: 4, icon: '', path: '/order/mz-o', children: [{ type: 'item', parentCode: 'mz-o', menuCode: 'list-om', name: '订单列表', sortNo: 1, icon: '', path: '/order/mz-o/list-om', children: [], home: false }, { type: 'item', parentCode: 'mz-o', menuCode: 'offline-om', name: '线下还款管理', sortNo: 2, icon: '', path: '/order/mz-o/offline-om', children: [], home: false }], home: false }], home: false }, { type: 'subMenu', parentCode: '', menuCode: 'system', name: '系统管理', sortNo: 5, icon: 'icon-data', path: '/system', children: [{ type: 'item', parentCode: 'system', menuCode: 'systemNode', name: '权限节点', sortNo: 1, icon: '', path: '/system/node', children: [], home: false }, { type: 'item', parentCode: 'system', menuCode: 'systemStaff', name: '用户管理', sortNo: 2, icon: '', path: '/system/staff', children: [], home: false }, { type: 'item', parentCode: 'system', menuCode: 'systemPost', name: '岗位管理', sortNo: 3, icon: '', path: '/system/post', children: [], home: false }, { type: 'item', parentCode: 'system', menuCode: 'systemRole', name: '角色管理', sortNo: 4, icon: '', path: '/system/role', children: [], home: false }, { type: 'item', parentCode: 'system', menuCode: 'systemPassword', name: '修改密码', sortNo: 5, icon: '', path: '/system/password', children: [], home: false }], home: false }], timeStamp: 1602835799238 };
  }
}

module.exports = TestController;

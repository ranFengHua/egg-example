'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/currentUser', controller.test.currentUser);
  router.get('/api/menu', controller.test.menu);
};

'use strict';

/**
 * message-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::message-banner.message-banner');

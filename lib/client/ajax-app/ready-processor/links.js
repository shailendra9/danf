'use strict';

/**
 * Expose `Links`.
 */
module.exports = Links;

/**
 * Module dependencies.
 */
var utils = require('../../../common/utils'),
    Abstract = require('./abstract')
;

/**
 * Initialize a new ajax links ready processor.
 *
 * @param {function} jquery JQuery.
 * @param {danf:event.eventTrigger} eventTrigger The event trigger.
 * @param {danf:ajaxApp.linksHandler} linksHandler The links handler.
 */
function Links(jquery, eventTrigger, linksHandler) {
    Abstract.call(this, jquery, eventTrigger);

    if (this.linksHandler) {
        this.linksHandler = linksHandler;
    }
}

utils.extend(Abstract, Links);

/**
 * Set the links handler.
 *
 * @param {danf.ajaxApp.linksHandler}
 * @api public
 */
Object.defineProperty(Links.prototype, 'linksHandler', {
    set: function(linksHandler) { this._linksHandler = linksHandler; }
});

/**
 * @interface {danf:ajaxApp.processor}
 */
Links.prototype.process = function(event, data) {
    this._linksHandler.load(data.scope);
}
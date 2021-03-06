'use strict';

/**
 * Expose `HistoryHandler`.
 */
module.exports = HistoryHandler;

/**
 * Initialize a new history handler.
 *
 * @param {danf:ajaxApp.bodyProvider} bodyProvider The body provider.
 * @param {danf:ajaxApp.readyTrigger} readyTrigger The ready trigger.
 */
function HistoryHandler(bodyProvider, readyTrigger) {
    if (bodyProvider) {
        this.bodyProvider = bodyProvider;
    }
    if (readyTrigger) {
        this.readyTrigger = readyTrigger;
    }
}

HistoryHandler.defineImplementedInterfaces(['danf:ajaxApp.historyHandler']);

HistoryHandler.defineDependency('_bodyProvider', 'danf:ajaxApp.bodyProvider');
HistoryHandler.defineDependency('_readyTrigger', 'danf:ajaxApp.readyTrigger');

/**
 * Set the body provider.
 *
 * @param {danf:ajaxApp.bodyProvider}
 * @api public
 */
Object.defineProperty(HistoryHandler.prototype, 'bodyProvider', {
    set: function(bodyProvider) { this._bodyProvider = bodyProvider; }
});

/**
 * Set the ready trigger.
 *
 * @param {danf:ajaxApp.readyTrigger}
 * @api public
 */
Object.defineProperty(HistoryHandler.prototype, 'readyTrigger', {
    set: function(readyTrigger) { this._readyTrigger = readyTrigger; }
});

/**
 * @interface {danf:ajaxApp.historyHandler}
 */
HistoryHandler.prototype.initialize = function() {
    var body = this._bodyProvider.provide();

    // Handle history states.
    if (null == window.history.state && window.history.replaceState) {
        window.history.replaceState(
            {content: body.html()},
            '',
            '{0}{1}'.format(window.location.pathname, window.location.search)
        );
    }
}

/**
 * @interface {danf:ajaxApp.historyHandler}
 */
HistoryHandler.prototype.add = function(state, path) {
    if (window.history.pushState) {
        window.history.pushState(state, '', path);
    }
}

/**
 * @interface {danf:ajaxApp.historyHandler}
 */
HistoryHandler.prototype.navigate = function(state) {
    var content = state.content,
        body = this._bodyProvider.provide()
    ;

    if (content) {
        if (body.html() !== content) {
            body.html(content);

            // Trigger an ajax ready event with the new integrated
            // data as scope.
            this._readyTrigger.trigger({scope: body});
        }
    }
}
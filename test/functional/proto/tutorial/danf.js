'use strict';

var utils = require('danf/lib/common/utils'),
    config = utils.merge(
        require('./config/common/this'),
        require('./config/server/this'),
        true
    )
;

module.exports = {
    dependencies: config.dependencies,
    contract: config.contract,
    config: {
        assets: utils.merge(
            {
                '-/danf': __dirname + '/danf-client',
                '-/tutorial/config': __dirname + '/config',
                '!-/tutorial/config/server': __dirname + '/config/server',
                '-/tutorial/lib': __dirname + '/lib',
                '!-/tutorial/lib/server': __dirname + '/lib/server',
                '-/tutorial/resource': __dirname + '/resource',
                '!-/tutorial/resource/private': __dirname + '/resource/private'
            },
            require('./config/server/assets'),
            true
        ),
        classes: require('./config/server/classes'),
        events: require('./config/server/events'),
        interfaces: utils.merge(
            require('./config/common/interfaces'),
            require('./config/server/interfaces'),
            true
        ),
        parameters: utils.merge(
            {
                view: {
                    path: __dirname + '/resource/private/view'
                }
            },
            require('./config/common/parameters'),
            require('./config/server/parameters'),
            true
        ),
        sequences: utils.merge(
            require('./config/common/sequences'),
            require('./config/server/sequences'),
            true
        ),
        services: utils.merge(
            require('./config/common/services'),
            require('./config/server/services'),
            true
        ),
        this: config.config
    }
};
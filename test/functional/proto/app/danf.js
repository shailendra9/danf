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
                '-/my-app/config': __dirname + '/config',
                '!-/my-app/config/server': __dirname + '/config/server',
                '-/my-app/lib': __dirname + '/lib',
                '!-/my-app/lib/server': __dirname + '/lib/server',
                '-/my-app/resource': __dirname + '/resource',
                '!-/my-app/resource/private': __dirname + '/resource/private'
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
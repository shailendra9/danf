/*!
 * Danf
 * https://github.com/gnodi/danf
 *
 * Copyright 2014, 2015 Thomas Prelot and other contributors
 * Released under the MIT license
 */

require(
    [
        '../common/framework/framework',
        '../common/framework/initializer',
        '../../config/client/ajax-app/classes',
        '../../config/client/ajax-app/interfaces',
        '../../config/client/ajax-app/services',
        '../../config/client/ajax-app/events',
        '../../config/client/ajax-app/sequences',
        '../../config/common/configuration/interfaces',
        '../../config/common/configuration/services',
        '../../config/common/configuration/classes',
        '../../config/common/dependency-injection/interfaces',
        '../../config/common/dependency-injection/services',
        '../../config/common/dependency-injection/classes',
        '../../config/common/event/interfaces',
        '../../config/common/event/services',
        '../../config/common/event/classes',
        '../../config/client/event/classes',
        '../../config/client/event/services',
        '../../config/common/manipulation/interfaces',
        '../../config/common/manipulation/services',
        '../../config/common/manipulation/classes',
        '../../config/common/object/interfaces',
        '../../config/common/object/services',
        '../../config/common/object/classes',
        '../../config/common/http/interfaces',
        '../../config/common/http/classes',
        '../../config/client/http/classes',
        '../../config/client/http/services',
        '../../config/client/vendor/classes',
        '../../config/client/vendor/services'
    ]
    , function(
        Framework,
        Initializer
    ) {
        require(['_app'], function(configuration) {
            setTimeout(
                function() {
                    // Build framework.
                    var framework = new Framework(),
                        initializer = new Initializer(),
                        app = function() {}
                    ;

                    framework.addInitializer(initializer);
                    framework.set('danf:app', app);
                    framework.build(configuration, danf.context);

                    app.servicesContainer = app.objectsContainer;
                },
                10
            );
        });
    }
);
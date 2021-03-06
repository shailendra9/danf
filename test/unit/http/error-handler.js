'use strict';

require('../../../lib/common/init');

var assert = require('assert'),
    utils = require('../../../lib/common/utils'),
    ErrorHandler = require('../../../lib/server/http/error-handler')
;

var errorHandler = new ErrorHandler(),
    debugErrorHandler = new ErrorHandler()
;

debugErrorHandler.debug = true;

var processTests = [
        {
            error: {status: 404, message: 'a'},
            expected: {name: 'Not Found', status: 404, message: 'Not Found'},
            debugExpected: {name: 'Not Found', status: 404, message: 'a'}
        },
        {
            error: {message: 'b'},
            expected: {name: 'Internal Server Error', status: 500, message: 'Internal Server Error'},
            debugExpected: {name: 'Internal Server Error', status: 500, message: 'b'}
        },
        {
            error: {message: 400},
            expected: {name: 'Bad Request', status: 400, message: 'Bad Request'},
            debugExpected: {name: 'Bad Request', status: 400, message: 'Bad Request'}
        },
        {
            error: {message: '400'},
            expected: {name: 'Bad Request', status: 400, message: 'Bad Request'},
            debugExpected: {name: 'Bad Request', status: 400, message: 'Bad Request'}
        }
    ]
;

describe('ErrorHandler', function() {
    describe('method "process"', function() {
        processTests.forEach(function(test) {
            it('should process HTTP errors', function() {
                var error = errorHandler.process(utils.clone(test.error));

                assert.deepEqual(error, test.expected);

                error = debugErrorHandler.process(test.error);

                assert.deepEqual(error, test.debugExpected);
            })
        })
    })
})
'use strict';

require('../../../lib/init');

var assert = require('assert'),
    Extender = require('../../../lib/object/class-processor/extender'),
    ClassesHandler = require('../../../lib/object/classes-handler'),
    ClassesIndexer = require('../../../lib/object/classes-indexer')
;

var A = function() {
    this._a = 1;
    this._b = 1;
    this._c = 1;
};

A.prototype.a = function() {
    return ++this._a;
};

A.prototype.b = function() {
    return ++this._b;
};

A.prototype.c = function() {
    return ++this._c;
};

var B = function() {
    B.Parent.call(this);
};

B.defineExtentedClass('a');

B.prototype.b = function() {
    this._b++;

    return B.Parent.prototype.b.call(this);
};

B.prototype.c = function() {
    this._c++;

    return B.Parent.prototype.c.call(this);
};

module.exports = B;

var C = function() {
    C.Parent.call(this);
};

C.defineExtentedClass('b');

C.prototype.c = function() {
    this._c++;

    return C.Parent.prototype.c.call(this);
};

module.exports = C;

var classesIndexer = new ClassesIndexer(),
    classesHandler = new ClassesHandler(classesIndexer),
    extender = new Extender(classesIndexer)
;

classesIndexer.index('a', A);
classesIndexer.index('b', B);
classesIndexer.index('c', C);

describe('Extender', function() {
    describe('method "process"', function() {
        it('should build defined inheritance between classes', function() {
            extender.process(C);

            var object = new C();

            assert.equal(typeof object.a, 'function');
            assert.equal(typeof object.b, 'function');
            assert.equal(typeof object.c, 'function');
            assert.equal(object.a(), 2);
            assert.equal(object.b(), 3);
            assert.equal(object.c(), 4);
        })
    })
})
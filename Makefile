MOCHA_OPTS = --check-leaks
REPORTER = dot

check: test

test: test-utils test-manipulation test-configuration test-object test-dependency-injection test-file-system test-event test-http test-rendering test-test test-app

test-utils:
	# Utils
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		$(MOCHA_OPTS) \
		test/unit/init.js test/unit/utils.js

test-manipulation:
	# Manipulation
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/manipulation/*

test-configuration:
	# Congiguration
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/configuration/*

test-object:
	# Object
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/object/*

test-dependency-injection:
	# Dependency Injection
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/dependency-injection/*

test-file-system:
	# File System
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/file-system/*

test-event:
	# Event
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/event/*

test-http:
	# HTTP
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/http/*

test-rendering:
	# Rendering
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/rendering/*

test-test:
	# Test
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--bail \
		$(MOCHA_OPTS) \
		test/unit/test/*

test-app:
	# App
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 5000 \
		$(MOCHA_OPTS) \
		test/unit/app.js
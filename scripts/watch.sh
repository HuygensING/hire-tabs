#!/bin/sh

node_modules/.bin/browserify src/index.js \
	--detect-globals false \
	--extension=.jsx \
	--external classnames \
	--external react \
	--standalone HireTabs \
	--transform [ babelify --plugins object-assign ] \
	--verbose | derequire > build/index.js
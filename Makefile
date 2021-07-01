REPORTER = spec
#doing coverage this way so that the node_modules 
#path can be used in Github Actions

coverage:
	@NODE_ENV=test ./node_modules/jest/bin/jest.js --config jestconfig.json && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
## SpotOn recruitment task developed using Cypress

Sample e2e tests using [Cypress](https://www.cypress.io/).

### Configuration

Cypress configuration is stored in `/cypress.json`.

### Running tests

There are two ways of running Cypress tests (using predefined scripts):
- `npm run cy:run` - by default cypress run will run all tests headlessly
- `npm run cy:open` - to open Cypress Test Runner that allows to run chosen tests in a 'visible' browser

Various available options can be found in [doc](https://docs.cypress.io/guides/guides/command-line#cypress-open).
Usually you don't want to run all tests locally, but limit them to the arreas affected by code changes. Limit tests using following option:
- `--spec "path/you/want/to/limit/tests/to"`

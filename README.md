A simple exapmle repo of using pnpm changesets and keeping package.json healthy in a monorepo environment.

# AS A DEVELOPER I CAN

- run pnpm i on the root, installing all dependancies
- get warning if i'm in the root
- only worry about the services individual dependancies
- deploy all services using `sls deploy --stage [stage]`
- deploy individually using a simple command of `sls deploy --service [service name] --stage [stage]` in the root.

# AS A CI/CD PIPELINE I CAN

- deploy each service individually based on commit message
- provide a simple interface to keep updated on service specific features in a json file
- run without the need to keep more than 1 package.json updated
- use secrets with github actions

# AS A TEST RUNNER I CAN

- keep myself in the root and allow tests to be run across the whole application
- have individual jest configs in each folder to provide a more tailored testing setup for each service

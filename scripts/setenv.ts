const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./environments/environment.prod.ts`
  : `./environments/environment.ts`;
const environmentBlankFileContent = `
export const environment = {
};
`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   faundadbGraphQLEndpoint: 'https://graphql.fauna.com/graphql',
   faundadbSecret: "${process.env['FAUNADB_SECRET']}",
};
`;
// always write an empty non-prod file to prevent an error
writeFile(`./environments/environment.ts`, environmentBlankFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote blank file to './environments/environment.ts'`);
});
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});

const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPathDev = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: false,
  BACKEND_URL: '${process.env['BACKEND_URL'] || 'http://localhost:3000'}',
  API_KEY: '${process.env['API_KEY'] || ''}'
};
`;

const envConfigFileProd = `
export const environment = {
  production: true,
  BACKEND_URL: '${process.env['BACKEND_URL'] || 'https://api.example.com'}',
  API_KEY: '${process.env['API_KEY'] || ''}'
};
`;

fs.writeFileSync(targetPathDev, envConfigFile, { encoding: 'utf8' });
fs.writeFileSync(targetPathProd, envConfigFileProd, { encoding: 'utf8' });

console.log(`Environment files generated successfully!`);
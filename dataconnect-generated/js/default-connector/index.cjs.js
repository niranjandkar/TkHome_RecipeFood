const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'foodidea_task',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;


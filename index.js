const bedrock = require('bedrock');
require('bedrock-express');

require('./config');

bedrock.events.on('bedrock-express.configure.static', app => {
  bedrock.config.express.static.push({
    route: '/',
    path: './public'
  });
  bedrock.config.express.static.push({
    route: '/js',
    path: './js'
  });
  bedrock.config.express.static.push({
    route: '/components',
    path: './components'
  });
  bedrock.config.express.static.push({
    route: '/nm',
    path: './node_modules'
  });
});

bedrock.start();

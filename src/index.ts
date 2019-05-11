'use strict';

import app from './app';
import winston from './utils/logger/winston';

/**
 * Starts the server on the provided port
 */
const server = app.listen(
  app.get('port'),
  () => {
    console.log(
      'App is running on http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env'),
      '\nPress CTRL-C to stop',
    );
    winston.debug('App started');
  },
);

export default server;

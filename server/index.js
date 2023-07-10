/* eslint consistent-return:0 import/order:0 */
const mongodbURI = require('./const')

const express = require('express');
const logger = require('./logger');
const mongoose = require('mongoose')

const router = require('./routes')

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

mongoose.connect(mongodbURI, {
  dbName: 'sample_students'
})

console.log('starting index.js now')

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)    
    
    // Send a ping to confirm a successful connection
    console.log("Pinged your deployment. You have successfully connected to MongoDB!");
  } catch {
    // Ensures that the client will close when you finish/error
    console.log('error received')
    await mongoose.connection.close();
  }
}
run().catch(console.dir);

// use custom routes from routes.js

app.use('/studentList', router)

// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});



// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: ".env",
});

/**
 * Express server application class
 * @description Contain the base routing system
 */

class Server {
  public app = express();
}

// init server app
const server = new Server();

//listen to port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

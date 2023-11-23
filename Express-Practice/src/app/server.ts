import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server; // Declare the variable without assigning the class

async function bootstrap() {
  server = new Server(); // Instantiate the Server class
  server.on("request", app); // Use the app as a request handler
  server.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
  });
}

bootstrap();

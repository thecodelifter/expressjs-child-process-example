# ExpressJS Child Process Example

A simple example of how to use NodeJS child processes with ExpressJS

### Basic Commands

- `npm install` (Installs all packages)
- `npm start` (Starts expressjs server)

### Routes to use for testing

`http://localhost:3000/process-name-delay?name=jake` for delayed name processing and then hit `http://localhost:3000/unblocked-process` to see unblocked process.

You can also hit multiple routes in new tabs `http://localhost:3000/process-name-delay?name=jake`, `http://localhost:3000/process-name-delay?name=bob` and `http://localhost:3000/process-name-delay?name=frank` for example. While waiting for those tabs load you can also still be able to hit `http://localhost:3000/unblocked-process` with it being unblocked.

# Tratamendo de Webhook Nuvemshop

Express server used to handle Nuvemshop Webhooks created with the Nuvemshop API

> How to use

1. Run `npm install` to install all dependencies
2. Run `node index.js` to initialize the server
3. Server will run in http:localhost:3000
4. You can now make POST requests to http:localhost:3000/teste
5. Headers: {Content-Type: application/json}
6. Body: {"id": 123, "name": "chosen-name"}
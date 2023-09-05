const express = require('express');
const app = express();
app.use(express.json());

app.get('/status', (request, response) => {
    const status = {
        'Status': 'Running'
    };
    console.log("Running app");
    response.send(status);
});

app.listen(3000, () => {
    console.log("Server Listening on PORT:", 3000);
});

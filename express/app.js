const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`));

app.get('/', (req, res) => {
    console.log(req.cookie)

    res.send('Hello World!');
    
});

//  How we give a semantic version to our app.
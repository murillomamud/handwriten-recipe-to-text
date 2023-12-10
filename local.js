const handler = require('./index').handler;
const fs = require('fs');

const image = fs.readFileSync('./images/IMG_0342.jpg', { encoding: 'base64' });

const event = {
    body: image,
};

const context = {};

handler(event, context).then((res) => {
    console.log(res);
    fs.writeFileSync('./results/IMG_0342.txt', res.body);
});

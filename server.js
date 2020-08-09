const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
            {
            'id': 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name': 'Jeon',
            'birthday': '870912',
            'gender' : 'male',
            'job' : 'worker'
            },
            {
              'id': 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name': 'Ko',
              'birthday': '880225',
              'gender' : 'female',
              'job' : 'owner'
             },
             {
                'id': 3,
                'image' : 'https://placeimg.com/64/64/3',
                'name': 'Koo',
                'birthday': '161110',
                'gender' : 'male',
                'job' : 'pet'
            }
          ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


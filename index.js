var express = require('express');
var app = express();
app.get('/api/users', function (req, res) {
    res.status(200).json({
      success: true,
      data: [{
        id: 1,
        name: 'John Doe',
        email: 'john@yopmail.com'
      }, {
        id: 2,
        name: 'Rohan Doe',
        email: 'rohan@yopmail.com'
      }]
    });
});
app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
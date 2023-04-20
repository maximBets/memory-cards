const route = require('express').Router();
const Main = require('../../components/Main');

route.get('/', (req, res) => {
  // if(req.session.userId){
  //   console.log('++++++++++++++');
  // }
  res.send(res.renderComponent(Main, {}));
});

module.exports = route;

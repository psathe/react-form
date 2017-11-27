var guid = require('guid');
var listeners = {};

class Dispatcher extends Component
{
  register(cb)
  {
    var id = guid.raw();
    listeners[id]=callback;
    return id;
  },
  dispatch(payload)
  {
    console.log("dispatched",payload);
    for(var id in listeners)
    {
      var listeners = listeners[id];
      listeners(payload);
    }
  }
}

module.exports = function(RED) {

  var dorita980 = require('dorita980');

  function dorita980ConfigNode(n) {
    RED.nodes.createNode(this, n);

      this.robot = new dorita980.Local(this.credentials.username, this.credentials.password, n.ip);

      this.on('close', function() {
          this.robot.end();
      });
  }



  function getMethodNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
      var myRobotViaLocal = this.server.robot;


    myRobotViaLocal.getTime().then((response) => {
      this.status({
        fill: "green",
        shape: "dot",
        text: "connected"
      });
    }).catch((err) => {
      this.status({
        fill: "red",
        shape: "ring",
        text: "disconnected"
      });
    });

    var node = this;
    this.on('input', function(msg) {


      eval("myRobotViaLocal." + config.method + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }


  function setMethodNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
      var myRobotViaLocal = this.server.robot;

    myRobotViaLocal.getTime().then((response) => {
      this.status({
        fill: "green",
        shape: "dot",
        text: "connected"
      });
    }).catch((err) => {
      this.status({
        fill: "red",
        shape: "ring",
        text: "disconnected"
      });
    });

    var node = this;
    this.on('input', function(msg) {

      eval("myRobotViaLocal." + config.method + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }


  function basicNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
      var myRobotViaLocal = this.server.robot;


    myRobotViaLocal.getTime().then((response) => {
      this.status({
        fill: "green",
        shape: "dot",
        text: "connected"
      });
    }).catch((err) => {
      this.status({
        fill: "red",
        shape: "ring",
        text: "disconnected"
      });
    });

    var node = this;
    this.on('input', function(msg) {

      var method;

      switch (msg.payload) {
        case "start":
          method = "start";
          break;
        case "pause":
          method = "pause";
          break;
        case "stop":
          method = "stop";
          break;
        case "resume":
          method = "resume";
          break;
        case "dock":
          method = "dock";
          break;
        default:
          method = "";
      }

      if (method.length > 0) {
        eval("myRobotViaLocal." + method + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");
      }

    });
  }


  RED.nodes.registerType("get", getMethodNode);
  RED.nodes.registerType("set", setMethodNode);
  RED.nodes.registerType("basic", basicNode);

  RED.nodes.registerType('dorita980Config', dorita980ConfigNode, {
    credentials: {
      username: { type: 'text' },
      password: { type: 'password' }
    }
  });
}

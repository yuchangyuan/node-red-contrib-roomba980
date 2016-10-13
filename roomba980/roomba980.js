module.exports = function(RED) {

  var dorita980 = require('dorita980');

  function dorita980ConfigNode(n) {
    RED.nodes.createNode(this, n);
    this.ip = n.ip;
    this.username = n.username;
    this.password = n.password;
  }



  function getMethodNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
    var myRobotViaLocal = new dorita980.Local(this.server.username, this.server.password, this.server.ip);


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


      eval("myRobotViaLocal." + config.method + "().then((response) => {msg.payload = response.ok; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }


  function setMethodNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
    var myRobotViaLocal = new dorita980.Local(this.server.username, this.server.password, this.server.ip);

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
    var myRobotViaLocal = new dorita980.Local(this.server.username, this.server.password, this.server.ip);


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


  function accumulatedHistoricalNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
    var myRobotViaCloud = new dorita980.Cloud(this.server.username, this.server.password);


    myRobotViaCloud.fbeep().then((response) => {
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


      eval("myRobotViaCloud." + "accumulatedHistorical" + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }

  function missionHistoryNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
    var myRobotViaCloud = new dorita980.Cloud(this.server.username, this.server.password);


    myRobotViaCloud.fbeep().then((response) => {
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


      eval("myRobotViaCloud." + "missionHistory" + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }


 function statusNode(config) {
    RED.nodes.createNode(this, config);

    this.server = RED.nodes.getNode(config.connection);
    var myRobotViaCloud = new dorita980.Cloud(this.server.username, this.server.password);


    myRobotViaCloud.fbeep().then((response) => {
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


      eval("myRobotViaCloud." + "getStatus" + "().then((response) => {msg.payload = response; node.send(msg);}).catch((err) => {msg.payload = err;node.send(msg);});");

    });
  }


  RED.nodes.registerType("get", getMethodNode);
  RED.nodes.registerType("set", setMethodNode);
  RED.nodes.registerType("basic", basicNode);
  RED.nodes.registerType("accumulatedHistorical", accumulatedHistoricalNode);
  RED.nodes.registerType("missionHistory", missionHistoryNode);
  RED.nodes.registerType("getstatus", statusNode);
  RED.nodes.registerType('dorita980Config', dorita980ConfigNode);
}

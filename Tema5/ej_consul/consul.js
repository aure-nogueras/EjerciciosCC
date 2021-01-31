const { config }  = require("dotenv").config();
const config_prefix = 'prueba';

class Config {
  constructor() {
    var self = this;
    const consul = require('consul')();
    self.listening_ip_address = process.env.LISTENING_IP_ADDRESS || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    self.port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 5000;
    consul.agent.service.list(function(err, result) {
      if (err) {
        console.log( "Consul no está conectado" );
      } else {
        consul.kv.get( config_prefix + '/listening_ip_address',
                     function( err, result ) {
                       if (result != undefined ) {
                         self.listening_ip_address = result.Value;
                         console.log("Ip establecida en " + self.listening_ip_address);
                       }
                     });

        consul.kv.get( config_prefix + '/listening_port',
                     function( err, result ) {
                       if (result != undefined ) {
                         self.port = result.Value;
                         console.log("Puerto establecido en " + self.port);
                       }
                     });
      }
    });

  }
}

const conf = new Config;

module.exports = { Config };


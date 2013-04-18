
remoteStorage.defineModule('sockethub', function(privateClient, publicClient) {

  privateClient.declareType('config', {
    "description" : "sockethub config file",
    "type" : "object",
    "properties": {
      "host": {
        "type": "string",
        "description": "the hostname to connect to",
        "format": "uri",
        "required": true
      },
      "port": {
        "type": "number",
        "description": "the port number to connect to",
        "required": true
      },
      "secret": {
        "type": "string",
        "description": "the secret to identify yourself with the sockethub server",
        "required": true
      }
    }
  });

  return {
    exports: {
      init: function() {
        privateClient.release('');
        publicClient.release('');
      },

      getConfig: function(platform, type) {
        return privateClient.getObject(type+'/'+platform);
      },

      writeConfig: function(platform, type, data) {
        return privateClient.storeObject('config', type+'/'+platform, data);
      }
    }
  };
});

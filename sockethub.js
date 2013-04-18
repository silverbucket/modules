
remoteStorage.defineModule('sockethub', function(privateClient, publicClient) {
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

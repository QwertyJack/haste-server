{

  "host": "::",
  "port": 7777,

  "keyLength": 4,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "file",
    "path": "/opt/haste/data"
  },

  "documents": {
    "about": "./about.md"
  }

}

module.exports = { 
    "extends": "airbnb-base",
    "globals": {
      "window": true,
      "document": false,
      "event": true
    }, 
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "linebreak-style": ["error", "windows"],
      "no-restricted-globals": ["error", "event", "fdescribe"],
      "import/extensions": [
        "error",
        "ignorePackages"
     ]     
    }
  };
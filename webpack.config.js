const path = require('path');
module.exports = {
 "mode": "production",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/i,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
   ]
 }
};
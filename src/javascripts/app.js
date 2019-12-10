import "../stylesheets/app.scss"
require ("bootstrap")
require ("jquery")
require ("popper.js")


function importAll (r) {
    r.keys().forEach(r);
  }
  
  importAll(require.context('../images', false, /\.(png|jpe?g|svg|gif)$/));
importAll(require.context('..', false, /^((?!index).)*\.html$/));

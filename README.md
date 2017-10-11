# react-with-foundation

This is simply [Create React App](https://github.com/facebookincubator/create-react-app) with Zurb [Foundation 6](https://github.com/zurb/foundation-sites) added in.  

Foundation comes with Gulp and SASS by default.  I removed Gulp and brought the Foundation SASS and all its dependencies into `package.json`.   I followed [create-react-app's own guidelines](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) for adding SASS.  

### Tweaks to Foundation:

* Small change to the Foundation demo, because it was making React crash.  The `<form>` section had a few instances of `<label>` tags nested inside `<input>` tags, which React didn't seem to like, so I un-nested them.

### TODO: 

* **Foundation's JavaScript components aren't working yet**, because I'm lame and new to Webpack and I couldn't figure out how to bring the Foundation JS into Webpack.  As a workaround you could add `<script>` tags to `index.html`.   (I tried to get the JS working in `src/foundation.js`, but it's broken, so it's not currently being used.)
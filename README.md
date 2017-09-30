# react-with-foundation

This is simply [Create React App](https://github.com/facebookincubator/create-react-app) with Zurb [Foundation 6](https://github.com/zurb/foundation-sites) added in.  

Foundation comes with Gulp and SASS by default.  I removed Gulp and brought the Foundation SASS and all its dependencies into `package.json`.   I followed [create-react-app's own guidelines](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) for adding SASS.  

### Modifications:
I made a small change to the Foundation demo, because it was making React crash.  The `<form>` section had a few instances of `<label>` tags nested inside `<input>` tags, which React didn't seem to like.  So I un-nested the `<label>` tags. 

### TODO: 

* Foundation Javascript needs to be added in so we can use its JS components.
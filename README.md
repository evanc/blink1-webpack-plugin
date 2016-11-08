# blink1-webpack-plugin
Signal webpack build status with a blink(1) notification light

To use: 

Install plugin and add it to your webpack configuration:

```
var Blink1Plugin = require(‘blink1-webpack-plugin’);
{
	plugins: [new Blink1Plugin()]
}
```

Now, start `webpack` with `webpack --watch`. When builds are pending, your blink(1) light will pulse blue. When it’s valid, it will show green. If there’s a compilation error, it will show red.

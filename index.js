var Blink1 = require('node-blink1');


function Blink() {
    this.blink1 = new Blink1();

    this.blink1.writePatternLine(800, 0, 0, 100, 0);
    this.blink1.writePatternLine(800, 0, 0, 180, 1);
};

Blink.prototype.done = function (callback) {
    var b = this.blink1;
    b.pause(function () {
        b.fadeToRGB(400, 0, 255, 0, callback);
    });
}

Blink.prototype.failed = function (callback) {
    var b = this.blink1;
    b.pause(function () {
        b.fadeToRGB(400, 255, 0, 0, callback);
    });
}

Blink.prototype.invalid = function (callback) {
    var b = this.blink1;

    b.setRGB(0, 0, 100, function () {
        b.playLoop(0, 1, 0, callback);
    });
}

Blink.prototype.apply = function (compiler) {

  compiler.plugin('done', function(stats, callback) {

    if (stats.compilation.errors.length) {
        this.failed(callback);
    } else {
        this.done(callback);
    }

  }.bind(this));

  compiler.plugin('watch-run', function (watching, callback) {
    this.invalid(callback);
  }.bind(this));

  compiler.plugin('invalid', function(compilation, callback) {
    this.invalid(callback);
  }.bind(this));

}

module.exports = Blink;

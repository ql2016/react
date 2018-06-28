var join = require('path').join;
var contentBase = process.cwd(); //运行当前脚本的工作目录的路径
//输出路径
var src = join(contentBase, 'src');
var dist = join(contentBase,'dist');

var js = join(src, 'js');
var page = join(js, 'page');
var pug = join(src, 'pug');
var sass = join(src,'sass');
var img = join(src,'imgs');

module.exports = {
	base: contentBase,
    src: src,
    dist: dist,
    js: js,
    page: page,
    sass: sass,
    img: img
};
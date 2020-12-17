const {src, dest, series, parallel, watch} = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const minifyCSS = require('gulp-csso');
const rename = require('gulp-rename');
const sourceMaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');


const cssPaths=[
    'src/sass/main.scss'
];

const jsPaths = [
    'src/script/**/*.js'   
];

function clean(){
  return del('dist/**');
}

function copyHTML(){
    return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(connect.reload());
}
function fontCopy()
{
    return src('src/fonts/**')
    .pipe(dest('dist/fonts'));
}
function copyImages(){
    return src('src/images/**')
    .pipe(dest('dist/images'));
}

function copyScript(){
    return src(jsPaths)
    .pipe(sourceMaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourceMaps.write())
    .pipe(dest('dist/script'));
}

function sassToCSS(){
    return src(cssPaths)
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename({extname:'.min.css'}))
    .pipe(dest('dist/css'))
    .pipe(connect.reload());
}

function watchFiles(){
    watch('src/sass/**', {delay:500}, sassToCSS);
    watch('src/script/', {delay:500}, copyScript);
    watch('src/index.html', {delay:500}, copyHTML);
}

function server()
{
    connect.server({
        root: './dist',
        port: 8080,
        livereload:true
    });
}

exports.default= series(clean, parallel(copyHTML, copyImages,fontCopy, sassToCSS,  copyScript), parallel(server, watchFiles));
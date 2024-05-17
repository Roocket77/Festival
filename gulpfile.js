
import { src, dest, watch, series} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';


const sass = gulpSass(dartSass);

export function js( done ){
    src('src/js/app.js')
        .pipe( dest('build/js'))

    done()
}
export function css( done ){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: '.'}))
    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/*.js', js)

}
export default series(js, css, dev)



// const { src, dest, watch, series }= require('gulp');
//     //scr = sirve para identificar un archivo
//     //dest= sirve para guargar un archivo
// const sass = require('gulp-sass')(require('sass'));
// const plumber = require('gulp-plumber');

//  function js(done){
//     src('src/js/app.js')
//         .pipe( dest('build/js') )

//     done()
// }
//  function css(done){
  
//     src('src/scss/**/*.scss', {sourcemaps: true})//Identificar el aarchivo de SAAS
//         .pipe( plumber())
//         .pipe( sass())//Compilarlo
//         .pipe( dest( 'build/css', {sourcemaps: true}));//Almacenarlos en el disco duro
//     done(); //callback que avisa a gulp cuando llegamos al final
// }

//  function dev(done){
//     watch('src/scss/**/*.scss', css);
//     done();

// }
// exports.css = css;
// exports.dev = dev;//npx gulp dev

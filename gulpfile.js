"use strict";

const gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	svgmin = require('gulp-svgmin'),
	webp = require('gulp-webp'),
	useref = require('gulp-useref'),
	concat = require('gulp-concat'),
	uncss = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	//DIRECTORIOS
	dir = {
		src: 'src',
		dist: 'dist',
                        nm:'node_modules'
	},

	files ={
                   CSS : [
                  ` ${dir.nm}/animate.css/animate.min.css`, // ruta a animate en node modules
                 `${dir.nm}/font-awesome/css/font-awesome.min.css`,
	     `${dir.nm}/responsimple/responsimple.min.css`,
	      `${dir.nm}/owl.carousel/dist/assets/owl.carousel.min.css`,
	     `${dir.nm}/owl.carousel/dist/assets/owl.theme.default.min.css`,
	     `${dir.dist}/css/estilos.css`
                   ],
                   mCSS : "estilos.min.css",
                   JS: [
                       `${dir.nm}/jquery/dist/jquery.min.js`,
			`${dir.nm}/owl.carousel/dist/owl.carousel.min.js`,
			`${dir.nm}/wowjs/dist/wow.min.js`,
			`${dir.dist}/js/codigos.js`
                   ],
                   mJS: 'codigos.min.js',
                   fonts :[`${dir.nm}/font-awesome/fonts/*.*`],
                   statics : [
                                 `${dir.src}/humans.txt`,
			`${dir.src}/sitemap.xml`
		]


	},//OPCIONES de plugins
	opts = {
                       pug:{
                       	     pretty:true, // a false minifica el index
                       	     locals :{
                       	     	titulo: "Anier",
                       	     	files:files
                       	     }
                       },
                       sass: {outputStyle: "compressed"},
                       es6:{presets:['es2015']}
	};

// tareas  EJECUTAR TAREAS en terminal : $ gulp pug
gulp.task('pug', () =>{
	gulp
	    .src( `${dir.src}/pug/*.pug` )
	      .pipe(pug(opts.pug))
	      .pipe(gulp.dest(dir.dist))
});

// tareas  EJECUTAR TAREAS en terminal : $ gulp sass
gulp.task('sass', () =>{
	gulp
	    .src( `${dir.src}/scss/*.scss` )
	      .pipe(sass(opts.sass))
	      .pipe(gulp.dest(`${dir.dist}/css`))
});

// tareas  EJECUTAR TAREAS en terminal : $ gulp  es6
gulp.task('es6', () =>{
	gulp
	    .src( `${dir.src}/es6/*.js` )
	      .pipe(babel(opts.es6))
	      .pipe(gulp.dest(`${dir.dist}/js`))
});
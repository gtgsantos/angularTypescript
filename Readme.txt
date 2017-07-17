### Passo a passo realizado para criar o projeto ###
obs: linhas que estão entre colchetes [] são linhas de código a serem digitadas no prompt.

1. Copiado um template responsivo básico para servir como página de referência, no qual vamos trabalhar em cima.

2. O git já foi instalado previamente no nosso ambiente, recomendo que seja feito, apesar de não influenciar diretamente no projeto.

3. O node também já foi instalado e ele é essencial no projeto. 

4. O Editor que estamos utilizando é o Visual Studio Code. Com ele, nós vamos poder interpretar o typescript mais facilmente.

5. Criar um gulpfile.js na pasta raiz do projeto. Ele é que vai ser responsável pela automatização dos pacotes do projeto

6. [npm install --save-dev gulp-connect]
# gulp-connect serve para fazer deploys automaticamente, em tempo de codificacao(livereload)
# acessar o site https://github.com/AveVLad/gulp-connect e copiar o bloco de código que está na área "livereload".
# colar o código dentro do gulpfile.js
# na linha "livereload: true", colocar uma vírgula após: "livereload: true,"; e colocar a seguinte linha abaixo:
# "port: 8081"

7. [npm install gulp -g]
# Com esse comando, o node vai instalar o gulp globalmente. 

8. [npm install gulp --save-dev]
# Com esse comando, o node vai instalar o gulp para ambiente de desenvolvimento.

9. [npm install gulp-connect --save-dev]
# Com esse comando, o node vai instalar o gulp-connect para ambiente de desenvolvimento.

10. Trocar as seguintes linhas abaixo:
#  "gulp.src('./app/*.html')"     por      "  gulp.src('./app/**/*.html')"
#  "gulp.watch(['./app/*.html'], ['html']);"     por      "gulp.watch(['./app/**/*.html'], ['html']);"

11. [gulp]
# irá rodar o gulpfile.js, rodando a task do gulp e inicializando o servidor.
# ao tentar acessar o endereço http://localhost:8081 , a nossa tela principal deverá ser exibida.

12. Criar novas tasks do gulp para os .js e os .css (igual a task do .html), e atualizar a task watch, para ficar assim:

#gulp.task('watch', function () {
#  gulp.watch(['./app/**/*.html'], ['html']);
#  gulp.watch(['./app/**/*.css'], ['css']);
#  gulp.watch(['./app/**/*.js'], ['js']);
#});

13. [npm install gulp-inject --save-dev]
# Com esse comando, o node vai instalar o gulp-inject para ambiente de desenvolvimento.
# Material de referência: https://www.npmjs.com/package/gulp-inject
#
#Inserir a linha "var inject = required('gulp-inject)" no início do gulpfile.js:
#
# var gulp = require('gulp');
# var connect = require('gul-connect');
# var inject = require('gulp-inject');
# gulp.task('index', function () {
#   var target = gulp.src('app/index.html');
#
#   var source = gulp.src(['app/src/**/*.js', 'app/src/**/*.css'], {read:false});
#
#   return target.pipe(inject(source, {relative: true})).pipe(gulp.dest('app/'));
# })
#
#
# Colocar o 'index' na task default:
# gulp.task('default', ['connect', 'watch', 'index']);
############################################################################################
## a partir daqui, as modificações são próprias, de testes para adaptação para typescript ##
############################################################################################

13. [npm install gulp-inject --save-dev] 
# Com esse comando, o gulp irá instalar o compilador de typescript para o gulp, no qual irá interpretar o código para javascript,
# e irá uni-lo a um único arquivo.
#
# Atualizar a task watch, para ela ficar assim:
# gulp.task('watch', function () {
#  gulp.watch(['./app/**/*.html'], ['html']);
#  gulp.watch(['./app/**/*.css'], ['css']);
#  gulp.watch(['./app/**/*.js'], ['js']);
#  gulp.watch(['./app/**/*.ts'], ['compile']);
#});
#
#
# Criar a task 'compile' e atualizar a task 'default':
#
# gulp.task('compile', function () {
#    return gulp.src('app/src/**/*.ts')
#        .pipe(typescript({
#            noImplicitAny: true,
#            outFile: 'all.js'
#        }))
#        .pipe(gulp.dest('app/target/js/'));
# });
#
#
# gulp.task('default', ['connect', 'watch', 'compile', 'index']);
#
#
#basicamente, isso resume a configuração do gulpfile.js
#
#para executar o servidor de aplicação, basta executar o comando [gulp] na linha de comando. 
#Ao alterar algum arquivo *.ts, *.js, *.html e *.css, o livereload do gulp irá ser disparado e irá atualizar a aplicação automaticamente.

const path = require("path");
const bodyParser = require('body-parser');

module.exports = {

    //на этапе разработки, при npm run serve все запросы с api будут переадресованы на target
    devServer: {
        proxy: {
            '^/api/': {
                target: 'http://127.0.0.2/',
                changeOrigin: true,
                ws: true
            }
        }
    },

    //перемещаем все собранные файлы в public/
    outputDir: 'public/',
    
    //все статичные файлы в public/assets/
    assetsDir: 'assets/',
    
    chainWebpack: (config) => {
        
        //Игнорируем каталог api в /public/ это бэкенд
        config.plugin("copy").tap(([options]) => {
            options[0].ignore.push("api/**");
            return [options];
        });

        //меняем шаблон html файла для выхода, теперь index.html генерится не на 
        //основе public/index.html, а на основе src/index.html
        config.plugin('html').tap( options => {
            options[0].template = path.resolve( __dirname, 'src/index.html' )
            return options;
        })
    },

}
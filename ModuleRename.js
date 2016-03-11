//功能:将package.json,README.md,关于模块名字的地方,从模板的'io-build'改名为新模块的名字.

//新模块名,唯一设置处
var newModuleName = 'io-build'

var fs = require('fs')

var rename = function(path){
  fs.readFile(path,'utf-8',function(err,data){
    fs.writeFile(path,data.replace(/io-build/g,newModuleName))
  })
}

rename('./README.md')
rename('./package.json')


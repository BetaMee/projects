/**
 * 这是一个生成HTML字符串的函数，用于在development和production模式下不同的页面需求
 * 
 * @param {any} env 
 */
function renderFullPage(env) {
  //根据生产和开发环境配置不同的页面
  if(env ==='development'){
    return (
    `
     <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>React Immutable Test</title>
        </head>
        <body>
          <div id="app">
          </div>
          <script src="/assets/client.bundle.js"></script>
        </body>
      </html>
    `);
  }else if(env ==='production'){
    return (
    `
     <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>十二棵橡树</title>  
        </head>
        <body>
          <div id="app">
          </div>
          <script src="/client.bundle.js"></script>
        </body>
      </html>
    `);
  }

}


module.exports = renderFullPage;

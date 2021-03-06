function renderFullPage(html,env) {
  //根据生产和开发环境配置不同的页面
  if(env=='development'){
    return`
    	  <!DOCTYPE html>
					<html lang="en">
						<head>
							<title>开发测试页面</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <style>
              body{
                  margin:0px;    
              }
              </style>
						</head>
            
						<body>
						<div id="root"></div>
							<script src='/devClient.bundle.js'></script>
						</body>     
			</html>
    `;
  }else if(env='production'){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>易物科技</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no"/>
          <link rel="stylesheet"  href="/assets/bundle.css">
          <style>
          body{
              margin:0px;
          }
          </style>
        </head>
        <body>
          <div id="root">
            <div>
              ${html}
            </div>
          </div>
          <script src="/assets/client.bundle.js"></script>
        </body>
        </html>
    `;
  }
}


module.exports = renderFullPage;

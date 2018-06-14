export default function renderFullPage(html, preloadedState, helmet) {
	return `
    <!doctype html>
    <html>
      <head>
		<link rel="icon" href="/dist/favicon.ico" type="image/ico" />
		
		<!-- Google font -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  
	  
		<!-- Bootstrap -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>
		
		<!-- Slick -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>
	  
		<!-- nouislider -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>
	  
		<!-- Font Awesome Icon -->
		<link rel="stylesheet" href="/dist/assets/styles/font-awesome.min.css">
		
		<!-- Custom stlylesheet -->
		<link rel="stylesheet" href="/dist/assets/styles/style.css"/>

        ${Object.keys(helmet).length ? helmet.title.toString() : ''}
        ${Object.keys(helmet).length ? helmet.meta.toString() : ''}
		${Object.keys(helmet).length ? helmet.link.toString() : ''}
		
      </head>
	  <body>
		<div id="root">${html}</div>
		
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
		</script>

		<script src="/dist/assets/js/jquery.min.js"></script>
		<script src="/dist/assets/js/bootstrap.min.js"></script>
		<script src="/dist/assets/js/slick.min.js"></script>
		<script src="/dist/assets/js/nouislider.min.js"></script>
		<script src="/dist/assets/js/jquery.zoom.min.js"></script>
		<script src="/dist/assets/js/main.js"></script>
		<script src="/dist/assets/app.bundle.js"></script>

      </body>
    </html>
    `
}
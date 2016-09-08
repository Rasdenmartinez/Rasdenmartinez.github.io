<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js / examples</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>

			@font-face {
				font-family: 'inconsolata';
				src: url('files/inconsolata.woff') format('woff');
				font-weight: normal;
				font-style: normal;
			}

			* {
				box-sizing: border-box;
			}

			html {
				height: 100%;
			}

			body {
				background-color: #ffffff;
				margin: 0px;
				height: 100%;
				color: #555;
				font-family: 'inconsolata';
				font-size: 15px;
				line-height: 18px;
				overflow: hidden;
			}

			h1 {
				margin-top: 30px;
				margin-bottom: 40px;
				margin-left: 20px;
				font-size: 25px;
				font-weight: normal;
			}

			h2 {
				font-size: 20px;
				font-weight: normal;
			}

			a {
				color: #2194CE;
				text-decoration: none;
			}

			#panel {
				position: fixed;
				left: 0px;
				width: 310px;
				height: 100%;
				overflow: auto;
				background: #fafafa;
			}

			#panel #content {
				padding: 0px 20px 20px 20px;
			}

			#panel #content .link {
				color: #2194CE;
				text-decoration: none;
				cursor: pointer;
				display: block;
			}

			#panel #content .selected {
				color: #ff0000;
			}

			#panel #content .link:hover {
				text-decoration: underline;
			}

			#viewer {
				position: absolute;
				border: 0px;
				left: 310px;
				width: calc(100% - 310px);
				height: 100%;
				overflow: auto;
			}

			#button {
				position: fixed;
				bottom: 20px;
				right: 20px;
				padding: 8px;
				color: #fff;
				background-color: #555;
				opacity: 0.7;
			}

			#button:hover {
				cursor: pointer;
				opacity: 1;
			}

			.filterBlock{
				margin: 20px;
				position: relative;
			}

			.filterBlock p {
				margin: 0;
			}

			#filterInput {
				width: 100%;
				padding: 5px;
				font-family: inherit;
				font-size: 15px;
				outline: none;
				border: 1px solid #dedede;
			}

			#filterInput:focus{
				border: 1px solid #2194CE;
			}

			#clearFilterButton {
				position: absolute;
				right: 6px;
				top: 50%;
				margin-top: -8px;
				width: 16px;
				height: 16px;
				font-size: 14px;
				color: grey;
				text-align: center;
				line-height: 0;
				padding-top: 7px;
				opacity: .5;
			}

			#clearFilterButton:hover {
				opacity: 1;
			}

			.filtered {
				display: none !important;
			}

			#panel li b {
				font-weight: bold;
			}

			/* mobile */

			#expandButton {
				display: none;
				position: absolute;
				right: 20px;
				top: 12px;
				width: 32px;
				height: 32px;
			}

			#expandButton span {
				height: 2px;
				background-color: #2194CE;
				width: 16px;
				position: absolute;
				left: 8px;
				top: 10px;
			}

			#expandButton span:nth-child(1) {
				top: 16px;
			}

			#expandButton span:nth-child(2) {
				top: 22px;
			}

			@media all and ( max-width: 640px ) {
				h1{
					margin-top: 20px;
					margin-bottom: 20px;
				}
				#panel{
					position: absolute;
					left: 0;
					top: 0;
					height: 480px;
					width: 100%;
					right: 0;
					z-index: 100;
					overflow: hidden;
					border-bottom: 1px solid #dedede;
				}
				#content{
					position: absolute;
					left: 0;
					top: 90px;
					right: 0;
					bottom: 0;
					font-size: 17px;
					line-height: 22px;
					overflow: auto;
				}
				#viewer{
					position: absolute;
					left: 0;
					top: 56px;
					width: 100%;
					height: calc(100% - 56px);
				}
				#expandButton{
					display: block;
				}
				#panel.collapsed{
					height: 56px;
				}
			}

		</style>
	</head>
	<body>
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-86951-15']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>

		<div id="panel" class="collapsed">
			<h1><a href="http://threejs.org">three.js</a> / examples</h1>
			<a id="expandButton" href="#">
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div class="filterBlock" >
				<input type="text" id="filterInput" placeholder="Type to filter"/>
				<a href="#" id="clearFilterButton" >x</a>
			</div>
			<div id="content"></div>
		</div>
		<iframe id="viewer" name="viewer" allowfullscreen onmousewheel=""></iframe>

		<script src="files.js"></script>

		<script>

		function extractQuery() {
			var p = window.location.search.indexOf( '?q=' )
			if( p !== -1 ) {
				return window.location.search.substr( 3 );
			}
			return ''
		}

		var panel = document.getElementById( 'panel' );
		var content = document.getElementById( 'content' );
		var viewer = document.getElementById( 'viewer' );

		var filterInput = document.getElementById( 'filterInput' );
		var clearFilterButton = document.getElementById( 'clearFilterButton' );

		var expandButton = document.getElementById( 'expandButton' );
		expandButton.addEventListener( 'click', function ( event ) {
			panel.classList.toggle( 'collapsed' );
			event.preventDefault();
		} );

		// iOS iframe auto-resize workaround

		if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {

			viewer.style.width = getComputedStyle( viewer ).width;
			viewer.style.height = getComputedStyle( viewer ).height;
			viewer.setAttribute( 'scrolling', 'no' );

		}

		var container = document.createElement( 'div' );
		content.appendChild( container );

		var button = document.createElement( 'div' );
		button.id = 'button';
		button.textContent = 'View source';
		button.addEventListener( 'click', function ( event ) {

			try {

				var url = location.href.split( '/' ).slice( 0, - 1 ).join( '/' );
				window.open( 'view-source:' + url + '/' + selected + '.html' );

			} catch ( e ) {

				window.open( 'https://github.com/mrdoob/three.js/blob/master/examples/' + selected + '.html' );
				console.log( e );

			}

		}, false );
		button.style.display = 'none';
		document.body.appendChild( button );

		var links = {};
		var selected = null;

		for ( var key in files ) {

			var section = files[ key ];

			var header = document.createElement( 'h2' );
			header.textContent = key;
			header.setAttribute( 'data-category', key );
			container.appendChild( header );

			for ( var i = 0; i < section.length; i ++ ) {

				( function ( file ) {

					var name = getName( file );

					var link = document.createElement( 'a' );
					link.className = 'link';
					link.textContent = name;
					link.href = file + '.html';
					link.setAttribute( 'target', 'viewer' );
					link.addEventListener( 'click', function ( event ) {

						if ( event.button === 0 ) {

							selectFile( file );

						}

					} );
					container.appendChild( link );

					links[ file ] = link;

				} )( section[ i ] );

			}

		}

		function loadFile( file ) {

			selectFile( file );
			viewer.src = file + '.html';

		}

		function selectFile( file ) {

			if ( selected !== null ) links[ selected ].classList.remove( 'selected' );

			links[ file ].classList.add( 'selected' );

			window.location.hash = file;
			viewer.focus();

			button.style.display = '';
			panel.classList.toggle( 'collapsed' );

			selected = file;

		}

		if ( window.location.hash !== '' ) {

			loadFile( window.location.hash.substring( 1 ) );

		}

		// filter

		filterInput.addEventListener( 'input', function( e ) {

			updateFilter();

		} );

		clearFilterButton.addEventListener( 'click', function( e ) {

			filterInput.value = '';
			updateFilter();
			e.preventDefault();

		} );

		function updateFilter() {

			var v = filterInput.value;
			if( v !== '' ) {
				window.history.replaceState( {} , '', '?q=' + v );
			} else {
				window.history.replaceState( {} , '', window.location.pathname );
			}
			if( selected ) window.location.hash = selected

			var exp = new RegExp( v, 'gi' );

			for ( var key in files ) {

				var section = files[ key ];

				for ( var i = 0; i < section.length; i ++ ) {

					filterExample( section[ i ], exp );

				}

			}

			layoutList();

		}

		function filterExample( file, exp ){

			var link = links[ file ];
			var name = getName( file );
			var res = file.match( exp );
			var text;

			if ( res && res.length > 0 ) {

				link.classList.remove( 'filtered' );

				for( var i = 0; i < res.length; i++ ) {
					text = name.replace( res[ i ], '<b>' + res[ i ] + '</b>' );
				}

				link.innerHTML = text;

			} else {

				link.classList.add( 'filtered' );
				link.innerHTML = name;

			}
		}

		function getName( file ) {

			var name = file.split( '_' );
			name.shift();
			return name.join( ' / ' );

		}

		function layoutList() {

			for ( var key in files ) {

				var collapsed = true;

				var section = files[ key ];

				for ( var i = 0; i < section.length; i ++ ) {

					var file = section[ i ];

					if( !links[ file ].classList.contains( 'filtered' ) ){

						collapsed = false;
						break;

					}

				}

				var element = document.querySelector( 'h2[data-category="' + key + '"]' );

				if( collapsed ){

					element.classList.add( 'filtered' );

				} else {

					element.classList.remove( 'filtered' );

				}

			}

		}

		filterInput.value = extractQuery()
		updateFilter( )

		</script>

	</body>
</html>

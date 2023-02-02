export function createHTML({ code, language, qualityMultiplier }: { code: string, language: string, qualityMultiplier: number }) {
  return `<html>
	<head>
		<link href="prism.css" rel="stylesheet" />
	</head>
	<div id="container">
		<pre id="codeBox"><div id="topRow"><div class="ball"></div><div class="ball"></div><div class="ball"></div></div><code class="language-${language}">${escape(code)}</code></pre>
	</div>
	<style>
		html {
      font-size: ${(isNaN(qualityMultiplier) ? 1 : qualityMultiplier) * 36}px;
			display: flex;
			--frame-background: rgba(0, 0, 0, .75);
			--frame-control-color: hsla(0, 0%, 100%, .2);
			--frame-title-placeholder-color: hsla(0, 0%, 100%, .3);
			--frame-title-color: hsla(0, 0%, 100%, .6);
			--frame-shadow-border: rgba(0, 0, 0, .8);
			--frame-highlight-border: hsla(0, 0%, 100%, .3);
		}

		#container {
			background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));
			min-width: 32.5em;
			padding: 4em;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#codeBox {
			min-height: 7.5em;
			padding-top: 0.8em;
			background-color: rgba(0, 0, 0, .75);
			border-radius: 0.8em;
			border: 0;
			box-shadow: 0 0 0 1px var(--frame-highlight-border), 0 0 0 1.5px var(--frame-shadow-border), 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072), 0 41.8px 33.4px rgba(0, 0, 0, .086), 0 100px 80px rgba(0, 0, 0, .12);
		}

		#topRow {
			display: flex;
			gap: 0.375em;
			margin-bottom: 1.75em;
		}

		.ball {
			width: 0.69em;
			height: 0.75em;
			background-color: var(--frame-control-color);
			border-radius: 50%;
		}
	</style>
	<script src="prism.js"></script>
</html>`
}

function escape(html: string) {
  return html.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
    <meta name="description" content="EntityDecode decodes HTML Entities and URL Encodings into their proper characters in real-time, without you having to submit any forms!">
    <meta name="keywords" content="entity, decode, html, encodings, decoder, html_entity_decode, encode, escaped, entities">
    <meta name="robots" content="index, follow">
    <meta charset="UTF-8">
    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACf0lEQVRYhe2XMWgUURCGvz8cIRySIohIlCBiJbkU5rASC0khIhZBLKzugYWlhQSxshCrYG0hvK1SSKoQgkUQCcFCNiJBRA6RIEEkhHAc4ViW5cZiN7LEPS8XMFeYgQe7O7Mz3+6b9+9bmZnoow30s/gxAIAmJyfPAC+Amz3euwjcr1Qqp4H3dH6YXTP7IGkRmPfeb+SdJTNrA7HUWy+aWSKpDbSBCNgB6mYW5+MkTUi6DFwCqs65R3mIUkHuFWD1AAxfgFbu/I2ZzUpq7ou7AkwAd8xsWlIzg9jpBLBsZs+7VZfUDsMwcs4BYGYtSZve+0Y+zjn3ClgCViXNAreAt8BcJ4D22tpaq+B6N6DCHvDeJ0ADWHTOJcACcNs5t+y93zrSVeC9fw18Ai5moy/LcAk4C4z1BcDMVoBB4JxzbqioB8rVavV8lzwRsB2GYdwlrsh+AE1gFCgEqAHXuyT5DDwF6r1Wl5SYWVPSCDBYBDCajb9ZApR7LQ6/BWyXdPoHigASoNurjUgVsGfL1DPOYAp14EkYhs8Ok/yAVjKzE5KQ1JdlWJI0TCrjST8AysAwsAXE/dCBcWAI2ARaRT3wT03SDTPbAr4FQXC0U+CcGwOuSfoqqQ5HKMXOuRHgIWkPvDOzDSj+HJer1erJA+RMgGalUtk7L9SFWq02JGkMeADcBb4Dc0EQRJ0AHmejm9VJNxcAmNkFSdPOud18kKR7wDhwysx+Sprx3q/v+UvZXvAwzTiQFUZSSdIUMFUQF5tZQ9IK8NJ7v5B37hWOSeW1F4v2HXeS5o9Z8Xlgfb+zZGbbkmaAXuU3Ip1PgKt0bugm6ZasEQTBH5A6/jf87wF+Ac3/6Jj1j+FcAAAAAElFTkSuQmCC" type="image/x-icon">
    <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACf0lEQVRYhe2XMWgUURCGvz8cIRySIohIlCBiJbkU5rASC0khIhZBLKzugYWlhQSxshCrYG0hvK1SSKoQgkUQCcFCNiJBRA6RIEEkhHAc4ViW5cZiN7LEPS8XMFeYgQe7O7Mz3+6b9+9bmZnoow30s/gxAIAmJyfPAC+Amz3euwjcr1Qqp4H3dH6YXTP7IGkRmPfeb+SdJTNrA7HUWy+aWSKpDbSBCNgB6mYW5+MkTUi6DFwCqs65R3mIUkHuFWD1AAxfgFbu/I2ZzUpq7ou7AkwAd8xsWlIzg9jpBLBsZs+7VZfUDsMwcs4BYGYtSZve+0Y+zjn3ClgCViXNAreAt8BcJ4D22tpaq+B6N6DCHvDeJ0ADWHTOJcACcNs5t+y93zrSVeC9fw18Ai5moy/LcAk4C4z1BcDMVoBB4JxzbqioB8rVavV8lzwRsB2GYdwlrsh+AE1gFCgEqAHXuyT5DDwF6r1Wl5SYWVPSCDBYBDCajb9ZApR7LQ6/BWyXdPoHigASoNurjUgVsGfL1DPOYAp14EkYhs8Ok/yAVjKzE5KQ1JdlWJI0TCrjST8AysAwsAXE/dCBcWAI2ARaRT3wT03SDTPbAr4FQXC0U+CcGwOuSfoqqQ5HKMXOuRHgIWkPvDOzDSj+HJer1erJA+RMgGalUtk7L9SFWq02JGkMeADcBb4Dc0EQRJ0AHmejm9VJNxcAmNkFSdPOud18kKR7wDhwysx+Sprx3q/v+UvZXvAwzTiQFUZSSdIUMFUQF5tZQ9IK8NJ7v5B37hWOSeW1F4v2HXeS5o9Z8Xlgfb+zZGbbkmaAXuU3Ip1PgKt0bugm6ZasEQTBH5A6/jf87wF+Ac3/6Jj1j+FcAAAAAElFTkSuQmCC" type="image/x-icon">
    <title>EntityDecode - HTML Entity Decoder</title>
    <link rel="stylesheet" type="text/css" href="http://entitydecode.com/assets/css/style.css">
</head>
<body ng-app>
    <div class="container">
      <h1 class="center"><span>Entity</span><span>Decode</span></h1><br>
      <a href="#" class="what"><span>What is </span><strong>Entity</strong><span>Decode</span><span>?</span> <b class="caret"></b></a>
      <div id="about" class="collapse out">
      <div class="well">
      <p><strong>Entity</strong><span>Decode</span> is a tool to change any escaped characters, such as %24 in URLs, and HTML entities such as &amp;raquo; into their proper characters (you can try both of those down below if you want!).</p>
      <p>You can use this to decode any HTML Entities, or URL Encodings, and make them more readable, by pasting/typing it into the <label for="encoded" style="display:inline;font-weight:bold">Encoded</label> Textbox.</p>
      <p>It also works the other way, you can paste/type anything you want to convert into an HTML Entity into the <label for="decoded" style="display:inline;font-weight:bold">Decoded</label> Textbox.</p>
      <p>If you are still stumped what this could be used for, click <a href="#" id="example">here</a> to add some example text.</p>
      <p>Note: It doesn't encode into URL Encodings e.g. %20, as they are evil.</p>
      <p>If you have no idea what I'm on about, with <a href="#" class="htmlent">HTML Entities</a> and <a href="#" class="urlencoding">URL Encodings</a>, click the respective links to view more information about them.</p>
      </div>
      </div><br>
      <noscript><div class="alert alert-error" style="width:95%">Please enable JavaScript. You will be unable to use this website with JavaScript disabled.</div></noscript>
      <label for="encoded">Encoded:</label>
      <textarea id="encoded" name="encoded" style="width:95%;height:200px;resize:none" placeholder="e.g. &amp;raquo;"></textarea>
      <hr>
      <label for="decoded">Decoded:</label>
      <textarea id="decoded" name="decoded" style="width:95%;height:200px;resize:none"placeholder="e.g. &raquo;"></textarea>
      <footer>
        <hr>
        <a href="http://robbrazier.com" target="_blank"><div class="rob"></div></a>
        <p style="text-align:center">If there are any problems, please feel free to <a href="http://robbrazier.com/contact" target="_blank">contact me</a></p>

        <!-- Piwik --> <script type="text/javascript">
        var _paq = _paq || [];
        (function(){ var u=(("https:" == document.location.protocol) ? "https://stats.entitydecode.com/" : "http://stats.entitydecode.com/");
        _paq.push(['setSiteId', 6]);
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'piwik.js';
        s.parentNode.insertBefore(g,s); })();
         </script>
        <!-- End Piwik Code -->
      </footer>
      <div id="htmlent" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="HTMLEntities" aria-hidden="true">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 id="HTMLEntities">HTML Entities</h3>
        </div>
        <div class="modal-body">
          <p>HTML Entities are used in websites when characters such as &lt; and &gt; cannot be used, as they will be interpreted as tags, <br>
          e.g. doing &amp;lt;p&amp;gt; instead of &lt;p&gt; will prevent the 'p' tag from being rendered.</p>
          <p>In some occasions, you must use the HTML Entities, as otherwise the browser will not recognise the symbol. </p>
          <p>&copy; is a culprit of this, as if you just paste that symbol in a webpage, it is likely to just render as a box (a.k.a. the character cannot be rendered)</p>
          <p>For more information about HTML Entities you can have a look <a href="http://docs.webplatform.org/wiki/html/entities" target="_blank">here</a>, or just have a Google around.</p>
        </div>
        <div class="modal-footer">
          <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
        </div>
      </div>
      <div id="urlencoding" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="URLEncoding" aria-hidden="true">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 id="URLEncoding">URL Encoding</h3>
        </div>
        <div class="modal-body">
          <p>URL Encodings are used if the URL includes non-ASCII characters, as URLs can only contain ASCII characters.</p>
          <p>URL Encoding solves this issue, as URLs often contain characters outside the ASCII set.</p>
          <p>W3Schools has a good description of it <a href="http://www.w3schools.com/tags/ref_urlencode.asp" target="_blank">here</a>, which I'd recommend you check out.</p>
        </div>
        <div class="modal-footer">
          <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
        </div>
      </div>
  </div>
  <script async defer type="text/javascript" src="http://entitydecode.com/assets/js/scripts.js"></script>
</body>
</html>

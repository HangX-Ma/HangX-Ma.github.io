// code block highlight styles
// adapted from: https://github.com/mashirozx/Sakura/blob/master/js/sakura-app.js#L137
function highlightStyle() {
  function genWrapper(i) {
    var ele_name = $("pre:eq(" + i + ")")[0].children[0].className;
    // we wouldn't deal with language-chart and language-mermaid
    if (ele_name.indexOf("chart") == -1 && ele_name.indexOf("mermaid") == -1) {
      var lang = ele_name
        .substr(0, ele_name.indexOf(" "))
        .replace("language-", "");
      if (lang.toLowerCase() == "hljs")
        var lang = $("pre:eq(" + i + ") code")
          .attr("class")
          .replace("hljs", "")
          ? $("pre:eq(" + i + ") code")
              .attr("class")
              .replace("hljs", "")
          : "text";
      $("pre:eq(" + i + ")").addClass("highlight-wrap");
      $("pre:eq(" + i + ")").attr("data-rel", lang.toUpperCase());
    }
  }
  // enable highlight.js
  $("pre code").each(function (i, block) {
    hljs.highlightBlock(block);
  });
  for (var i = 0; i < $("pre").length; i++) {
    genWrapper(i);
  }
  // enable line numbers for highlight.js
  hljs.initLineNumbersOnLoad({
    singleLine: true,
  });
  // click to make the code block full screen
  $("pre").on("click", function (e) {
    if (e.target !== this) return;
    $(this).toggleClass("code-block-fullscreen");
    $("html").toggleClass("code-block-fullscreen-html-scroll");
  });
}

$(document).ready(function () {
  highlightStyle();
});

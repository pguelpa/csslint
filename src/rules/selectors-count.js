/*global CSSLint*/
/*
 * Rule: Metric to see how many selectors you have
 */
CSSLint.addRule({

    //rule information
    id: "selectors-count",
    name: "Selectors Count",
    desc: "Track how many selectors there are",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this,
            counter = 0;

        function startStylesheet() {
          counter = 0;
        }

        function endStylesheet() {
          reporter.stat("selector-count", counter);
        }

        function startRule(event) {
          counter += event.selectors.length;
        }

        parser.addListener("startstylesheet", startStylesheet);
        parser.addListener("endstylesheet", endStylesheet);
        parser.addListener("startrule", startRule);
    }

});
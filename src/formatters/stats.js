/*global CSSLint*/
CSSLint.addFormatter({
    //format information
    id: "stats",
    name: "Only output statistics",

    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        return "";
    },

    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function() {
        return "";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename, options) {
        var stats = results.stats,
            output = "";
        options = options || {};

        var pos = filename.lastIndexOf("/"),
            shortFilename = filename;

        if (pos === -1){
            pos = filename.lastIndexOf("\\");
        }
        if (pos > -1){
            shortFilename = filename.substring(pos+1);
        }

        output = "\n\n" + shortFilename;
        for(var stat in stats) {
            output += "\n" + stat + " = " + stats[stat];
        }

        return output;
    }
});
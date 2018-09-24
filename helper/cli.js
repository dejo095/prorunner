module.exports = {
    runCli: function(params) {
        var child_process = require('child_process');
        child_process.execSync("start %SystemRoot%/system32/WindowsPowerShell/v1.0/powershell.exe -noexit -command cd d:/records-ui/AerData.Stream.Web.E2e.Tests/; protractor conf.js " + params );
        // child_process.execSync("start cmd.exe /k pushd d:\\records-ui\\AerData.Stream.Web.E2e.Tests" );
    }
}

const cli = require('./helper/cli');

// catching click event on button
document.querySelector('#cliBtn').addEventListener('click', (params) => {
    cli.runCli('ping 127.0.0.1');
});
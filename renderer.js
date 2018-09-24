const cli = require('./helper/cli');
const conf = require(process.env.HOST);
const objekt = conf.config.suites;

        // unchecks all checked checkboxes
        function resetAll() {
            var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
            allCheckboxes.forEach(element => {
                if (element.checked) {
                  element.checked = false;
                }
            });
        };

        // displays all suites from conf.js
        function listAllSuites() {
            var allSuites = Object.keys(objekt);

            allSuites.forEach(suite => {
                document.querySelector('#suites').innerHTML += `<div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="${suite}">
                <label class="custom-control-label" for="${suite}">${suite}</label>
                </div>`;
            });
        };

        // displays all tests from conf.js
        function listAllTests() {
            for (const suite in objekt) {
                if (objekt.hasOwnProperty(suite)) {
                    objekt[suite].forEach(element => {
                        document.querySelector('#tests').innerHTML += `<div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="${element}">
                        <label class="custom-control-label" for="${element}">${element}</label>
                        </div>`;
                    });
                }
            }
        };

        // gets all checked items and returns them in array
        // need to pass id of container where to get items #tests or #suites
        function getAllCheckedItems(container) {
            var wrapper = document.querySelector(container);
            var chckbox = wrapper.querySelectorAll('input');
            var testCollection = [];

            chckbox.forEach(element => {
                if (element.checked) {
                    var _parent =  element.parentElement.children;
                    var label = _parent[1].innerHTML;
                    testCollection.push(label);
                    return testCollection;
                }
            });
            return testCollection;
        };

        // EVENT LISTENERS
        document.querySelector('#btnTests').addEventListener('click', () => {
            var tests = getAllCheckedItems('#tests');
            alert(`these tests are checked ${tests}`);
        });

        document.querySelector('#btnSuites').addEventListener('click', () => {
            var suites = getAllCheckedItems('#suites');
            alert(`these suites are checked ${suites}`);
        });

        document.querySelector('#reset').addEventListener('click', () => {
            resetAll();
        });

        document.querySelector('#cliBtn').addEventListener('click', (params) => {
            cli.runCli('--suite="Workflow"');
        });

        listAllSuites();
        listAllTests();
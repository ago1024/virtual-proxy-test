# virtual-proxy-test

Test Qlik Sense virtual proxy prefix

* Install virtual-proxy-test.zip extension
* Import virtual-proxy-test.qvf app
* Open app

The sheet queries the virtual proxy prefix with
qlik.getGlobal().session.options.prefix

QS February 2019 would show the prefix

QS February 2020 relaod the page as qlik.getGlobal() tries to reopen the app without the virtual proxy prefix set




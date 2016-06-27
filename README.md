# slimerjs_issue

## SlimerJS
    $ docker run --net none  -it  -v `pwd`:/scripts/ -w /scripts/ cmfatih/slimerjs /usr/bin/slimerjs  introspect.js doesntwork.html 
    Getting doesntwork.html
    loaded
    eval call log:{"title":"tester","call_log":0}
    $ docker run --net none  -it  -v `pwd`:/scripts/ -w /scripts/ cmfatih/slimerjs /usr/bin/slimerjs  introspect.js works.html
    Getting works.html
    Webpage console: Called eval: a+10
    loaded
    eval call log:{"title":"tester","call_log":1}`

## Phantomjs (with Array.from patch)
    $ /opt/phantomjs/bin/phantomjs introspect.js works.html 
    Getting works.html
    Webpage console: Called eval: a+10
    loaded
    eval call log:{"title":"tester","call_log":1}
    $ /opt/phantomjs/bin/phantomjs introspect.js doesntwork.html
    Getting doesntwork.html
    Webpage console: Called eval: a+10
    loaded
    eval call log:{"title":"tester","call_log":1}

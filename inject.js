window.call_log = 0;
var orig = eval;
window.eval = function() {
    window.call_log += 1;
    console.log("Called eval:", Array.from(arguments));
    return orig.apply(this, arguments);
}

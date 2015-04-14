(function() {


function tryEval(expression, context) {
    try {
        return math.eval(expandContext(expression, context)) || '';
    } catch(e) {
        return e;
    }
}

function expandContext(expression, context) {
    var temp = expression;
    
    for (var i = 0; i < context.length; i++) {
        var previousResult = context[i];
        
        temp = temp.replace('$'+(i+1), previousResult);
    }
    
    return temp;
}


var app = new Vue({
    el: '#mainContent',
    
    data: {
        inputText: '2+3\n5*2\n\n$1+$2\nsin(3*PI/2)'
    },
    
    filters: {
        evaluate: function (data) {
            if (typeof(data) == 'undefined') {
                return '';
            }
            var lines = data.split('\n');
            var result = '';
            var context = new Array(lines.length);
            
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var processedItem = tryEval(line, context);
                context[i] = processedItem;
                result += ('<li>' + processedItem + '</li>');
            }
            
            return '<ol>' + result + '</ol>';
        }
    }
});

})();

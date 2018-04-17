function encode(word, n) {
    var result = [];
    for (var j = 0; j < n; j++) {
        result[j] = [];
    };
    var i = 0;
    var direction = 1;
    var tmpArr = word.split('');
    tmpArr.forEach(function(letter){
        result[i].push(letter)
        if (i === 0) {
            direction = 1;
        } else if (i === n-1) {
            direction = -1;
        };
        i += direction;
    });
    for (j = 0; j < n; j++) {
        result[j] = result[j].join('');
    };
    return result.join('')
}

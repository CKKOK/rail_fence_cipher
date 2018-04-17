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


function decode(word, n) {
    var result = [];
    var l = word.length;
    var cycleLength = 2*n - 2;
    var firstRowLength = Math.ceil(l/cycleLength);
    var middleRowLength = Math.floor(l/cycleLength) * 2;
    var bottomRowLength = Math.floor(l/cycleLength);
    var initialInterval = 2*n - 3;
    var rows = [];
    rows[0] = word.substr(0, firstRowLength);
    var j = 1;
    for (var i = firstRowLength; i < l; i += middleRowLength) {
        rows[j] = word.substr(i, middleRowLength);
        j++;
    };
    // Insert zig-zag logic here
};

decode('WECRLTEERDSOEEFEAOCAIVDEN', 3)
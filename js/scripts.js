var countUp = function(interval, countTo) {

    var intInterval = parseInt(interval);
    var intCountTo = parseInt(countTo);
    var result = [];

    for (var i= 0; i <= intCountTo; i = i + intInterval)            {
        var count = i.toString();
        result.push(count);
    }

    var final = result.splice(0, 1)

    return result;

};

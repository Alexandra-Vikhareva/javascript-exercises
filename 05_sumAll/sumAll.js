const sumAll = function(first_num, second_num) {
    if ((typeof first_num != 'number' || first_num % 1 != 0 || first_num <= 0) 
        || (typeof second_num != 'number' || second_num % 1 != 0 || second_num <= 0)) {
            return 'ERROR'
    }
    else {
        if (first_num > second_num) {
            [first_num, second_num] = [second_num, first_num];
        };
        let result = 0;
        for (let i = first_num; i <= second_num; i++) {
            result += i;
        };
        return result

    }
};

// Do not edit below this line
module.exports = sumAll;

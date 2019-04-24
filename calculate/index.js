let stratigies = {
    'S': function (salary) {
        return salary * 5;
    },
    'A': function (salary) {
        return salary * 3;
    },
    'B': function (salary) {
        return salary * 2;
    },
    'C': function (salary) {
        return salary;
    },
}
function calculate(level, salary) {
    return stratigies[level](salary);
    // this.level = level;
    // this.salary = salary;
    // switch (level) {
    //     case 'S':
    //         console.log(salary * 5);
    //         break;
    //     case 'A':
    //         console.log(salary * 3);
    //         break;
    //     case 'B':
    //         console.log(salary * 2)
    //         break;
    //     case 'C':
    //         console.log(salary);
    //         break;
    //     default:
    //         console.log('卷铺盖滚蛋！')

    // }


}
console.log(calculate('A',10000));
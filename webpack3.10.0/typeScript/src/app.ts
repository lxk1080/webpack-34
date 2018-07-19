import * as L from 'lodash';

// 这里装了声明文件 @types/lodash ，当语法错误时编译器会有报错提示，并且webpack编译不通过
// 如果不装声明文件，则不会有报错提示，且编译会通过
// 这里也可以先去全局安装 typings ，然后使用 typings install ??? --save 安装声明文件
// 然后需要在 tsconfig.json 文件内配置 typeRoots 参数（配置声明文件的路径）
console.log(L.chunk([1, 2, 3, 4, 5], 2)); // 两个元素一个拆分

const NUM = 10;

interface Animal {
    name: string;
    gender: string;
    age: number;
}

class Cat implements Animal {
    name: string;
    gender: string;
    age: number;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
        this.age = NUM;
    }
}

function printName(cat: Animal) {
    console.log(cat.name);
}

const cat = new Cat('miao', 'male');

printName(cat);


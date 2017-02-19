/**
 * Created by yc on 2017-02-19.
 */
;(function(){
    //动物类，父类
    var Animal = function(){
        this.type = '动物';  //动物类实例的属性，也可以被继承
        this.arr = [1,2,[3,4]]
    };

    Animal.prototype.say = function(){ //动物类的原型对象的方法，可以被继承
        console.log(this.type)
    };

    Animal.prototype.obj = {
        a: 'a',
        b: {
            c: 'c'
        }
    }

    var Cat = function(color){ // 猫类
        this.color = color;
    };

    //继承方法，是将父类的实例对象赋值给子类的原型对象，这样就可以通过子类原型对象，访问父类的原型对象，从而来实现继承
    var extend = function(parent, child){
        child.prototype = new parent();
        child.prototype.constructor = child; //由于是直接复制父类的实例对象给子类的原型对象，
        // 这样子类就切断了与原来子类的原型对象的联系，默认的cnstructor的值应该是自己的构造函数的指针，所以这里要手动修改
    };

    extend(Animal, Cat);

    Cat.prototype.say = function(){ //重写了父类的say方法，不影响父类
        console.log('我的颜色是' + this.color)
    };

    var a = new Animal();
    a.say(); //动物

    var cat = new Cat('yellow');
    cat.say(); //我的颜色是yellow
    console.log(cat, cat.type); //Cat { color: 'yellow' } '动物'

    //深拷贝继承
    var copyExtend = function(src, target){

        for(var o in src){

            if(typeof src[o] === 'object'){

                target [o] = src[o].constructor === Array ? [] : {};
                copyExtend(src[o], target [o]);//递归执行

            }else{

                target[o] = src[o]

            }
        }
    }

    var Dog = function(){
        this.name = '狗子'
    }
    copyExtend(new Animal(), Dog.prototype)//复制父类实例上的方法和属性
    copyExtend(Animal.prototype, Dog.prototype)//复制原型上的属性和方法
    //两个都执行，就可以继承父级所有的属性和方法
    var dog = new Dog();

    console.log(Dog.prototype);
    // Dog {
    //    type: '动物',
    //        arr: [ 1, 2, [ 3, 4 ] ],
    //        say: [Function],
    //        obj: { a: 'a', b: { c: 'c' } }
    // }
    dog.say();//动物
    dog.arr.push(15);
    var aa = new Animal();
    var catt = new Cat('red');
    console.log(aa.arr);//[ 1, 2, [ 3, 4 ] ]
    console.log(catt.arr);//[ 1, 2, [ 3, 4 ] ]
    console.log(dog.arr)//[ 1, 2, [ 3, 4 ],15 ]
})();
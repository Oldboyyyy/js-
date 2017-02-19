#js面向对象
##js本身没有类，只能通过构造函数来模拟类
##通过 new 关键字来创建构造函数实例，我们通常将实例公用的方法和属性放在构造函数对的prototype上，
把每个实例私有的属性（引用类型的属性）放在构造函数里面通过this来绑定在实例上。
##引用类型的属性放在prototype上，每个实例都可以访问，且访问的是同一个数据。
#js继承
##是通过构造函数与原型连组合的方式来实现的
##当一个属性在对象的属性里面找不到，就会沿着原型连向上查找，一直找到Object.prototype，如果找不到就返回undefined
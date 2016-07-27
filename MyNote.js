javascript篇
elem.className  //当直接传入一个DOM节点时可以直接用.className获取其类名
elem.id //同上，可直接获取其id
elem.clientWidth  //获取元素的宽度
elem.clientHeight //获取元素的高度
car.style['-webkit-transform'] = ''; //一些css3的样式是这样定义的

string.split('_')[1]; //将一个字符串从有_处即分割开，返回一个数组，字符串中_将被清除
arr.splice(n,m);//从目标数组中截取其中的数。截取之后目标数组将损失被截取的数，代码中表示从第n个数开始截取至第m个数
/\s*this_string\s*/.test(str)  //匹配一个正则表达式，向字符串str中，匹配则传回一个true，否则false。其中\*s表示的是匹配前后的空格
str.replace(/old_string/, 'new_string'); //将str字符串中的匹配字符替换为目标字符
str.substr(0,1);  //从str字符串中从第0个字符截取到第1个字符并返回,当只传入一个值时则表示从该位置开始向后截取至字符串尾部
function g(selector){ //这个函数定义用来使用传入一个类名或者id，然后根据第一个字符返回查询到的DOM元素
	var method = selector.substr(0, 1) == '.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
var arr = [];    arr.push(_arr);//将元素_arr加入到arr数组中

Math.min(num_1, num_2); //求最小值，可传入数组；
Math.max(num_1, mun_2); //求最大值，可传入数组；
Math.ceil(floatNum);  //向上舍入，如传入参数带有小数则去掉小数进一位
Math.round(floatNum); //四舍五入，如传入参数带有小数则四舍五入
Math.floor(floatNum); //向下舍入，如传入参数带有小数则去掉小数并不进位
Math.random(); //取随机数，可能返回[0,1)之间的数
function random( range ){ //传入一个数组（含两个数）计算返回一个随机中间值的函数
	var max = Math.max( range[0], range[1] );
	var min = Math.min( range[0], range[1] );
	var diff = max - min;
	var number = Math.ceil((Math.random()*diff+min));
	return number;
}

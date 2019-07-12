var post = [{_id:'fasdfdsa',  title: 'sussage', username: 'binxia'},
 {_id:'ffgdgdagasdsa',  title: 'egg', username: 'yannan wu'},
 {_id:'tweqrewqrewqr',  title: 'salmon', username: 'yuhang xia'},
 {}
];

// search all document
for (var i = 0; i < post.length; i++) {
	alert(post[i]);
	console.log(post[i]);
};

// search all document
var result;
for (var i = 0; i < post.length; i++) {
	if (post[i].username === 'yannan wu') {
	alert(post[i]);
	result = result + post[i];
	console.log(result);
	};
};

// count
var count = 0;
for (var i = 0; i < post.length; i++) {
	if (post[i].username === 'yuhang xia') {
		count = count + 1;
	};
	console.log("现在yuyang xia写的认知模型的数量是：" + count);
};

console.log("最终yuyang xia写的认知模型的总数量是：" + count);

// delete (array remove method is splice())
for (var i = 0; i < post.length; i++) {
	if (post[i].username === 'binxia') {
		post.splice(i, 1);
		i = i - 1;
	};
};

// update
for (var i = 0; i < post.length; i++) {
	if (post[i].username === 'yannan wu') {
		post[i].username = 'tianyu wu';
	};
};

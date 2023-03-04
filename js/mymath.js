// OLD VERSION DO NOT USE
// Older pens still rely on this.

/**
 * MyMath.js
 * -----------
 * Handy math/trig reference.
 * 
 * Author: Caleb Miller
 *         caleb@caleb-miller.com
*/
 
const MyMath = (function MyMathFactory(Math) {

	const MyMath = {};

	//【awanmua】：将角度转换为弧度制的常数
	// degree/radian conversion constants
	MyMath.toDeg = 180 / Math.PI;
	MyMath.toRad = Math.PI / 180;
	MyMath.halfPI = Math.PI / 2;
	MyMath.twoPI = Math.PI * 2;

	//【awanmua】：勾股定理计算距离
	// Pythagorean Theorem distance calculation
	MyMath.dist = (width, height) => {
		return Math.sqrt(width * width + height * height);
	};
	
	//【awanmua】：接收粒子的坐标
	// Pythagorean Theorem point distance calculation
	// Same as above, but takes coordinates instead of dimensions.
	MyMath.pointDist = (x1, y1, x2, y2) => {
		const distX = x2 - x1;
		const distY = y2 - y1;
		return Math.sqrt(distX * distX + distY * distY);
	};
	
	//【awanmua】：返回二维矢量的角度（不做特别说明都采用弧度制
	// Returns the angle (in radians) of a 2D vector
	MyMath.angle = (width, height) => ( MyMath.halfPI + Math.atan2(height, width) );

	//【awanmua】：返回两点间的角度；这里采用坐标
	// Returns the angle (in radians) between two points
	// Same as above, but takes coordinates instead of dimensions.
	MyMath.pointAngle = (x1, y1, x2, y2) => ( MyMath.halfPI + Math.atan2(y2 - y1, x2 - x1) );

	//【awanmua】：将速度正交分解为x，y轴的矢量
	// Splits a speed vector into x and y components (angle needs to be in radians)
	MyMath.splitVector = (speed, angle) => ({
		x: Math.sin(angle) * speed,
		y: -Math.cos(angle) * speed
	});

	//【awanmua】：生成区间[min,max)内的随机数
	// Generates a random number between min (inclusive) and max (exclusive)
	MyMath.random = (min, max) => Math.random() * (max - min) + min;
	
	//【awanmua】：生成区间[min,max]内的整数
	// Generates a random integer between and possibly including min and max values
	MyMath.randomInt = (min, max) => ((Math.random() * (max - min + 1)) | 0) + min;

	//【awanmua】：从数组中返回一个随机元素，或者返回参数集提供调用
	// Returns a random element from an array, or simply the set of provided arguments when called
	MyMath.randomChoice = function randomChoice(choices) {
		if (arguments.length === 1 && Array.isArray(choices)) {
			return choices[(Math.random() * choices.length) | 0];
		}
		return arguments[(Math.random() * arguments.length) | 0];
	};
	
	//【awanmua】：返回一个min与max间的中值
	// Clamps a number between min and max values
	MyMath.clamp = function clamp(num, min, max) {
		return Math.min(Math.max(num, min), max);
	};


	return MyMath;

})(Math);
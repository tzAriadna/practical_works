var calculator = (function() {
	var module = {};

	function getBaseLog(x, y) {
			return Math.log(y) / Math.log(x);
	};

	module.getPayment = function(sum, period, rate) {
			var i,
					koef,
					result;

			i = (rate / 12) / 100;
			koef = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
			result = sum * koef;
			return result.toFixed();
	};

	module.getPeriod = function(sum, payment, rate) {
			var param,
					i,
					result;

			i = (rate / 12) / 100;
			param = payment / sum;
			result = getBaseLog(1 + i, -param / (i - param));
			return Math.ceil(+result);
	};

	return module;
})();

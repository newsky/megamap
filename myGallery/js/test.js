/**
 * @author Ye Jiabin
 * A Test file for mygallery
 */

(function(window) {
	window.addEventListener('load', function(){
		GSys.init(['haha', 'aaa','bbb'],
			{cont:'cav', width: 600});
		GSys.start();
	}, false);
})(window);

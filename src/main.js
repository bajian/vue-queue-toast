import Vue from 'vue'
import App from './App'
import Toast from './components/toast'

//this is the dafault options (这是默认的参数) 
// toastDefaultOptions = {
//     		duration : 2000,
//     		css : '',
//     		text : ''
//     	}


// Toast.config({//change any config u like refer to the defaultoptions,such as this one below（//可以在初始化的时候修改参数，参照下面的例子：）
// 	// duration:5000
// })
Vue.use(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

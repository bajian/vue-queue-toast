# vue-queue-toast
当同时toast多个消息的时候，以队列的形式，每次只显示一个toast，类似原生android app
when many toast are called at the same time,they will be piped in a queue,and be showed only one at a time like the native android Toast

for defferent functions, see my [another-toast](https://github.com/bajian/vue-toast)

####demo

[live-demo](https://rawgit.com/bajian/vue-queue-toast/master/dist/demo1.html)

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

####How to install
``` js
import Toast from './components/queue-toast'

Vue.use(Toast)
```

####How to use
``` js
  methods:{
      //这两个同时调用的toast会被加入队列，第一个消失后第二个才会被显示出来
      this.$toast.show('bajian1 this is a queue toast')
      this.$toast.show('bajian2 this is a queue toast',5000)
  }
```
####options
``` js
//this is the dafault options (这是默认的参数) 
// toastDefaultOptions = {
//        duration : 2000,
//        css : '',
//        text : ''
//      }

//.show(text,during)

//.config({
//  duration:8000
//})

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

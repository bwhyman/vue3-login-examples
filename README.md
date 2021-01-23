# vue3-login-examples

### 说明

基于用户权限，动态显示功能导航(侧边栏等)，让用户仅看见允许自己使用的功能当然是正确的。  

但是当前网络上的解决方案基本是登录后，后端返回用户的权限路由以及功能列表，前端动态添加路由，渲染功能列表。  
这本身已经违背了前后端分离的设计原则。而且，所有延迟加载组件编译后的文件是暴露的，文件可以直接下载。  

试想，如果把所有角色的所用后端API请求地址全部写在一起(比如store/index.ts中)，首次请求就会直接暴露后端接口，有没有路由又有什么用？可以通过JS/Java/Python/任何HTTP测试工具直接尝试向后端请求数据，根本不需要路由和渲染组件。  

登录成功返回的不应是路由信息，应该是权限下的api请求地址，使前端不知道其他权限的请求地址。但后端服务器地址端口还是暴露的，还是多余的。请求时携带的加密封装的用户基本信息/权限信息的token才是最重要的。至于连功能列表都后端提供更是毫无意义，只会增加后期维护成本。

因此，前端的核心是提供友好的互交体验，安全性上使用户无法执行没有权限的后端请求操作即可，为了“不可见”增加开发维护成本得不偿失。

### 解决方案
前端基于不同权限，创建单独的文件承载权限对应的路由信息以及功能导航信息。基于后端返回的用户角色权限，加载路由，渲染功能导航(这个权限仅是渲染页面用，用户真实权限在token)。即使用户绕过前端的权限验证，发出的任何非权限请求后端均拒绝处理。  

技术。基于Webpack单独打包组件模块，基于ES7 import()函数异步加载权限相关模块。

### 页面刷新
用户刷新页面，会初始化路由信息，丢失vuex中的功能列表数据。  

在main.ts入口，判断sessonstorage中角色信息。加载对应角色权限数据，再执行createApp()函数。

### 细粒度的组件权限验证
基于自定义指令的细粒度组件的权限显示。
缺点，自定义指令对元素影响的第一个回调是created。即执行顺序是，先创建组件对象，created后，判断用户是否有权限，没有，再从父节点移除。何必呢，看着很帅但是逻辑上就不对。

v-if指令是先判断后决定是否创建，代码也很好维护。

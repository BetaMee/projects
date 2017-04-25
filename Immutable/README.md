## Immutable.js + PureReact


本demo主要目的着眼于React生命周期的变化，以及验证Immutable.js对于react组件性能的影响。

组件的结构是这样的：

![React Component Construct](./doc/image/componentFlow.png)


##  1.组件挂载顺序

![Mount Flow](./doc/image/mountFlow.png)

由图片可知，组件的mount顺序是先等所有的组件**will mount**完后再**did mount**，并且按照在render函数中的位置排列。
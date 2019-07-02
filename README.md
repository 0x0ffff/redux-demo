store 创建了顶级仓库作为存储中心。action 是数据处理，reducer 是仓库中对应数据的更新。

简单的总结一下
- Store：就是保存数据的地方，你可以把它看作一个容器。但是对于整个应用来说只能有一个 Store。Redux API  提供了一个创建store
  ```js
  import { createStore } from 'redux';
  const store = createStore(func); // 这里需要接收函数
  ```

- Store 对象里面包含了所有的数据。当你想获取 State 时，就需要
  ```js
  import { createStore } from 'redux';
  const store = createStore(func);
  const state = store.getState()
  ```

- Action：是一个对象，其中 `type` 属性时必须的，表示 Action 的名称。当然也可以添加一些其他的属性。

- Action Creator：当 Action 过多的时候，一个个的创建 Action 是效率极低的，这时候可以定义一个函数来生成 Action。

- `store.dispatch()` 是 View 发出 Action 的唯一方法。

- Reducer：store 收到 Action 以后，必须给出一个新的 state，这样 View 才会发生改变。这种 state 的改变叫做 `reducer`。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

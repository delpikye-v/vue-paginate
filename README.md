<div >
    <h1>vue-paginate-z</h1>
    <a href="https://codesandbox.io/s/lwdjoj">LIVE EXAMPLE</a>
</div>

---

#### Description

+ Vue pagination (simple) with css. (ts)
+ You can customize ripple css.
---

#### Usage
```js
npm install vue-paginate-z --save
```

Import the module in the place you want to use:
```js
import 'vue-paginate-z/dist/styles.css' // => to main
import Paginate from 'vue-paginate-z'
Vue.use(Paginate)
```

#### Snippet

##### `simple`

```js
    // data() {
    //     currentPage: 1,
    // }

    <Paginate
        :totalCount="100"
        //   :limit="10"
        //   labelFirst="|<<"
        //   labelLast="Last"
        //   :sectionNumber="5"
          v-model="currentPage"
        //   :showFirstLast="true"
        //   showForwardBack="false"
    />

    // <Paginate
        // :totalCount="100"
        // :limit="10"
        // labelFirst = "|<<",
        // labelLast = ">>|",
        // labelBack = "<",
        // labelForward = ">",
        // v-model="currentPage2"
        // type="pager"
    // />

```

<br />


---

#### props


<br />

#### RUN

<a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
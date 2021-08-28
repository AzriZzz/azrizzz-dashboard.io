# azrizzz-dashboard.io

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## tailwindcss-textshadow
Url : https://github.com/iunteq/tailwindcss-textshadow

Purposes: To gave user interaction on hovering elements to show it's detail.


## Framer Motion

Adding animation

- Create an object for the animation , as an example 

```
export const fadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

```
- In our component, we need to import out motion API to make sure we can utilize on our code

```
import { motion } from "framer-motion";
```

We need to add motion before our tag of each places we want to fire our animation, as an example:

```
<motion.div variants={fadeUp} initial="initial" animate="animate">
  <h1>Hello World</h1>
</motion.div>
```

In more advanced implementation, if we wanted to add staggering effect, as in each of individual
item to show in different time. We need to create another object animation called stagger.

```
export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

In our component, the way to implement is we need to wrap our first motion div with stagger object animation. Then, the children we can add fadeUp animation object without adding initial and animate

```
<motion.div variants={stagger} initial="initial" animate="animate">
  <motion.h1 variants={fadeUp}>Hello World</motion.h1>
</motion.div>
```


Adding animation on router, we need to go to _app.tsx and use AnimatePresence method to fire the animation,
with exitBeforeEnter

```
<AnimatePresence exitBeforeEnter>
    <Component {...pageProps} key={router.route} />
  </AnimatePresence>
</div>
```

Then we create a new animation object called router to give the effect of transitioning between the page
```
export const routerFadeUp = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      ease: 'easeInOut'
    }
  }
};
```

In each of every page, on the most parent div, add motion.div and the variants , with an exit.
Exit is import to be use because we want this happening when we move to another page.
```
<motion.div
  variants={routerFadeUp}
  initial="initial"
  animate="animate"
  exit="exit"
>
</motion.div>
```
# Framer Foundation

## The Core Idea

Everything starts by replacing a normal element with a Framer Motion element:

Then control three main things:
These three cover most real-world animations.

```jsx
import { motion } from "framer-motion";

<motion.div />

<motion.div
  initial={{ ...startingState }}
  animate={{ ...targetState }}
  transition={{ ...howItMoves }}
/>

```

### Animatable Properties

Framer Motion animates real CSS properties. If CSS can animate it, Framer Motion likely supports it.

Opacity
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

### Transform Properties

#### Position

x: 50
y: -100

#### Scale

scale: 1.2
scaleX: 2
scaleY: 0.8

#### Rotation

rotate: 360
rotateX: 45
rotateY: 45

#### Skew

skewX: 10
skewY: -10

#### Size

width: 300
height: 200

Supports units like px, %, vh, vw, and often auto.

#### Color

backgroundColor: "#ff0000"
color: "#00ff00"
borderColor: "#000"

Supports hex, rgb, rgba, and hsl.

Border Radius
borderRadius: 20
borderRadius: "50%"

#### Shadows

boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"

#### Filters

filter: "blur(10px)"
backdropFilter: "blur(20px)"

#### Clip Path

clipPath: "inset(0% 0% 0% 0%)"

Useful for reveal effects and masking.

#### SVG Animation

<motion.path
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
/>

Supports pathLength, pathOffset, opacity, stroke, fill, strokeWidth.

### Key Animation Concepts

Multiple Properties

```jsx
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
/>
```

State Driven Animation
const [open, setOpen] = useState(false);

```jsx
<motion.div
  animate={{ height: open ? 300 : 100, opacity: open ? 1 : 0.5 }}
  transition={{ duration: 0.4 }}
  onClick={() => setOpen(!open)}
/>
```

Keyframes

```jsx
<motion.div animate={{ x: [0, 50, -50, 0] }} transition={{ duration: 1 }} />
```

Transition Controls
Duration
transition={{ duration: 0.5 }}

Easing
transition={{ ease: "easeInOut" }}

Or custom:

ease: [0.76, 0, 0.24, 1]

Spring
transition={{
  type: "spring",
  stiffness: 200,
  damping: 20
}}

Delay
transition={{ delay: 0.2 }}

Repeat
transition={{
  repeat: Infinity,
  repeatType: "loop",
  duration: 1
}}

Mental Models

Initial defines where it starts.
Animate defines where it ends.
Transition defines how it gets there.

#### Duration vs spring animation

Duration animation = robotic but predictable
Spring animation = natural, UI feels premium

stiffness → strength of spring (higher = faster snap)

damping → resistance / bounce (lower = more bounce)

```jsx
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.2 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 280, damping: 10 }}
  style={{
    width: 120,
    height: 120,
    background: "skyblue",
    borderRadius: 12,
  }}
/>
```

### Keyframes = multi step animation

```jsx
animate={{ property: [value1, value2, value3] }}

```

#### Repeat controls looping

```jsx
repeat: Infinity;
repeatType: "loop" | "reverse" | "mirror";
```

Differences:

loop → restart from start each time

reverse → goes forward then backward same timeline

mirror → similar to reverse but better for some keyframes

## Scroll based Animation

Framer Motion gives us two main tools:

1. whileInView → animate when element scrolls into the screen
2. useScroll + useTransform → advanced parallax / progress animations

### Basic scoll reveal

```jsx
import { motion } from "framer-motion";

export default function ScrollDemo() {
  return (
    <div style={{ height: "200vh", paddingTop: "200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          width: 120,
          height: 120,
          margin: "auto",
          background: "skyblue",
          borderRadius: 12,
        }}
      />
    </div>
  );
}
```

initial → before visible
whileInView → when visible

```jsx
viewport={{ once: false, amount:0.4 }}
```

once makes it such that it only happens once and amount correlates to how much of the item should be in the viewport before the scroll based animation is triggered

#### Staggered Animation

```jsx
const items = [1, 2, 3, 4];

<motion.ul
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  style={{ listStyle: "none", padding: 0 }}
>
  {items.map((i) => (
    <motion.li
      key={i}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, delay: i * 0.15 }}
      style={{
        width: 200,
        height: 50,
        margin: "20px auto",
        background: "skyblue",
        borderRadius: 10,
      }}
    />
  ))}
</motion.ul>;
```

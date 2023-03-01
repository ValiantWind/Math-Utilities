# Math Functions

A Zero-Dependency Package containing Set of Math Functions to make my life (and the people who use this lives') easier.

This is written entirely in TypeScript.

This package contains type definitions.

Documentation coming soon!

### Installing:

```
npm install math-functions
```

---

## Example Use:

```ts
// Common JS
const { Algebra, Arithmetic, Calculus, Converters } = require("math-functions");

// ES6
import { Algebra, Arithmetic, Calculus, Converters } from "math-functions";

console.log(Algebra.getSlope(1, 2, 9, 6)); // 0.5
console.log(Arithmetic.getEvens[(1, 2, 3, 5, 6, 9, 0, 69, 420)]); // [2, 6, 0, 420]
console.log(Calculus.getFactorial(5)); // 120
console.log(Converters.CToK(30)); // 303
console.log(Geometry.getCircumference(30)); // 188.49...
```

## Why did you create this?

Two reasons.

1. I get bored of my current projects sometimes.
2. I showed my Calculus teacher my [Calculators Project]([https://github.com/ValiantWind/Calculators) and he was impressed about the fact that I'm trying to make a website for several types of Calculators.

   - He asked if I could make a set of functions and tools that could help with general math equations and formulas and such, and that if I managed to do this, he'd give me extra credit. That's very cool of him.

## Why use this over other Math-related Packages?

No particular reason. I bet there are lots of other Math-related packages that are better than mine.

If you find this useful, that's great. I'm glad this package could be of use to you! :)

## Contributing

Contributions are **always** welcome. It will save me from using hours of my time for making functions for complicated formulas.

## FAQ

Q: Some of these functions are a waste of time to make, since you only need one line to replicate it. Why bother to make these?

A: Why not? I wanted to include everything. Whether it's easy or hard :)

Q: Do you plan on maintaining this after you show your Calculus teacher this project?

A: Yes.

## Credits

The JavaScript Snippets from the [the 30 Seconds of Code Repository.](https://github.com/30-seconds/30-seconds-of-code) Saved me some time.

## License

This package is registered under the Mozilla Public License 2.0 License

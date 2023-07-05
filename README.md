# Random distribution in JavaScript

- [Random distribution in JavaScript](#random-distribution-in-javascript)
  - [Introduction](#introduction)
  - [Motivation](#motivation)
  - [Approach](#approach)
  - [Results](#results)
    - [1. `Math.random()`](#1-mathrandom)
    - [2. Linear congruential generator](#2-linear-congruential-generator)
      - [2.1 RANDU](#21-randu)
    - [3. Counter-based random number generator (CBRNG)](#3-counter-based-random-number-generator-cbrng)
      - [3.1 Squares: A Fast Counter-Based RNG (Random Number Generator)](#31-squares-a-fast-counter-based-rng-random-number-generator)
  - [References](#references)

## Introduction

A goal of this repository is to analyze the distribution of different pseudo-random number generation methods in plain JavaScript.

## Motivation

While developing a Phaser video game I needed to randomly place objects in a 2D space. Despite the documentation of `Math.random()` stating it's a 'approximately uniform distribution' [^1], results looked awfully similar to a normal distribution (objects were generated mostly in the middle of the screen). I decided to investigate the issue and test `Math.random()`, as well as other pseudo-random number generators.

## Approach

A random 1.000.000 numbers are generated using each method and saved in a CSV file. Results are then processed by pandas and matplotlib to generate a histogram and calculate a standard deviation. Tests were performed on an Apple M1 MacBook Air with 8GB of RAM and Node.js v20.3.0.

## Results

### 1. `Math.random()`

The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. [^1]

![Math.random()](/images/math_random_histogram.png)

Standard Deviation: 0.28883

### 2. Linear congruential generator

A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. The method represents one of the oldest and best-known pseudorandom number generator algorithms. [^2]

#### 2.1 RANDU

RANDU is a linear congruential pseudorandom number generator, defined by the recurrence [^3]:

$V_{j+1} = 65539\cdot V_j\, \bmod\, 2^{31}\,$

![RANDU](/images/randu_histogram.png)

Standard Deviation: 0.28847

### 3. Counter-based random number generator (CBRNG)

A counter-based random number generation (CBRNG, also known as a counter-based pseudo-random number generator, or CBPRNG) is a kind of pseudorandom number generator that uses only an integer counter as its internal state. They are generally used for generating pseudorandom numbers for large parallel computations. [^4]

#### 3.1 Squares: A Fast Counter-Based RNG (Random Number Generator)

This implementation is based on the paper [^5] by Sebastiano Vigna and is available as a npm package [^6]. GitHub page of the project [^7].

![CBRNG](/images/cbrng_histogram.png)

Standard Deviation: 0.28855

## References

[^1]: [Math.random Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
[^2]: [Linear congruential generator Wikipedia page](https://en.wikipedia.org/wiki/Linear_congruential_generator)
[^3]: [RANDU Wikipedia page](https://en.wikipedia.org/wiki/RANDU)
[^4]: [Counter-based random number generator Wikipedia page](https://en.wikipedia.org/wiki/Counter-based_random_number_generator)
[^5]: [Squares: A Fast Counter-Based RNG (Random Number Generator)](https://arxiv.org/pdf/2004.06278v2.pdf)
[^6]: [Squares RNG npm package](https://www.npmjs.com/package/squares-rng)
[^7]: [Squares RNG GitHub page](https://github.com/FlorisSteenkamp/squares-rng)

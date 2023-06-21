---
layout: post
title: 'Slove complex equations by MATLAB'
date: 2023-06-21
categories: Math
tags: Macroeconomics Math MATLAB

---

For anyone who want to solve a complex equation, which is hard to work out by hands (Like *General Equlibrium* in Economy) .

# First method: Directly

1. Define symbols (variables) of the equation:

```matlab
syms k [more_varibles]
```

2. Define the equation using the above symbols, for example:

```matlab
eqn = (k^2+k)^2-0.98*(2-k^2)^2*(1+0.5/k) == 0
```

3. Slove out the analytical solutions (解析解) if exits:

```matlab
S = solve(eqn) % assign the result to S
```

4. If you need a numerical solutions (数值解), draw a picture of the equation first to find out the range of solutions:

```matlab
% draw in the vicinity of solutions 
% range from -4 to 2 (you could try another)
fplot([lhs(eqn) rhs(eqn)], [-4 2])
```

<img title="" src="https://s2.loli.net/2023/06/21/ZW69sAhDagNlnw4.png" alt="fig1.png" width="303">

5. Find out the numerical solutions in the certain range we have observered (we assume that k>0):

```matlab
V = vpasolve(eqn,k,[0,1])
```

output:

```matlab
>> V = vpasolve(eqn,k,[0,1])

V =

0.85411502864076704504148852270389
```

# Second method: Multiple equations

TO-DO

# Reference

[MATLAB help documents](https://ww2.mathworks.cn/help/matlabmobile/ug/solving-symbolic-math-equations_zh_CN.html)

[MATLAB online](https://matlab.mathworks.com/)

# Question 3

Please understand the following program

```JS
function recur(n, cur) {
    
    if (!cur) {
        cur = 0;
    }
    
    if (n < 2) {
        throw new Error('Invalid input');
    }
    
    if (n === 2) {
        return 1 / n + cur;
    }
    
    return recur(n - 1, cur + 1 / (n * (n -1)));
}
```
To prevent an infinite loop in a production system. Write a program doing the same calculation without
recursion. Please note that a while loop is also not good in a production system.

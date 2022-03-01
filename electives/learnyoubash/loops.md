# Learn Bash

## LOOPS (Exercise 9 of 11)

Here we won't be surprised.

As in any programming language, a loop in bash is a block of code</br>
that iterates as long as the control conditional is true.

There are four types of loops in Bash: for, while, until and select.

</br>

## for loop

The `for loop` is very similar to its sibling in C.

It looks like this:

```bash
for arg in elem1 elem2 ... elemN
do
  # statements
done
```

During each pass through the loop, `arg` takes on the value from `elem1` to `elemN`.

Values may also be wildcards or [braceexpansion](#brace-expansion).

</br>

Also, we can write a for loop in one line, but in this case there needs to be a semicolon before do,</br>
like below:

```bash
for i in {1..5}; do echo $i; done
```

By the way, if `for..in..do` seems a little bit weird to you,</br>
you can also write for in C-like style such as:

```bash
for (( i = 0; i < 10; i++ )); do
  echo $i
done
```

`for` is handy when we want to do the same operation over each file in a directory.

</br>

For example:

if we need to move all `.bash` files into the `script` folder and give them execute permissions,</br>
your script would look like this:

```bash
#!/bin/bash

for FILE in $HOME/*.bash; do
  mv "$FILE" "${HOME}/scripts"
  chmod +x "${HOME}/scripts/${FILE}"
done
```

</br>

## while loop

The `while` loop tests a condition and loops a sequence of commands so long as that condition is true.

A condition is nothing more than the primary used in `if..then` conditions.

So a working example with while loop might look like this:

```bash
#!/bin/bash

# Squares of numbers from 0 through 9
x=0
while [[ $x -lt 10 ]]; do # value of x is less than 10
  echo $(($x * $x))
  x=`expr $x + 1` # increase x
done
```

Just like in the case of the `for` loop, if we want to write do and the condition in the same line,</br>
then we must use a semicolon before do.

</br>

## until loop

The `until` loop is the exact opposite of the while loop.

Like a while loop it checks a test condition,</br>
but it keeps looping as long as this condition is false:

```bash
until [[ condition ]]; do
  #statements
done
```

</br>

## Loop control

There are situations when we need to stop a loop before its normal ending or step over an iteration.

In these cases, we can use the shell built-in `break` and `continue` statements.

Both of these work with every kind of loop.

The `break` statement is used to exit the current loop before its ending.

The `continue` statement steps over one iteration. We can use it as such:

```bash
for (( i = 0; i < 10; i++ )); do
  if [[ $(($i % 2)) == 0 ]]; then continue; fi
  echo $i
done
```

If we run the example above, it will print all odd numbers from 0 through 9.

</br>

## THE CHALLENGE

Create a file named `loops.bash`.

The first two positional parameters which will be passed into your script are the limits.

You should write all even numbers in the range between the first and second positional parameters.

</br>

Example

```txt
./loops.bash 10 17
```

Output:

```txt
10
12
14
16
```

Use `for`, `while` or `until` loops to solve this problem.

</br>

## Done

In the description of the problem we haven't mentioned the `select` loop.

The `select` loop helps us to organize a user menu.

It has almost the same syntax as a `for` loop:

```bash
  select answer in elem1 elem2 ... elemN
  do
    # statements
  done
```

</br>

The `select` prints all `elem1..elemN` on the screen with their sequence numbers,</br>
after that it prompts the user. Usually it looks like `$?` (PS3variable).

The answer will save in answer. If answer is the number between `1..N`,</br>
then statements will execute and select will go to the next iteration — that's because we should use break statement.

</br>

A working example might look like this:

```bash
#!/bin/bash

PS3="Choose the package manager: "
select ITEM in bower npm gem pip
do
  echo -n "Enter the package name: " && read PACKAGE
  case $ITEM in
    bower) bower install $PACKAGE ;;
    npm)   npm   install $PACKAGE ;;
    gem)   gem   install $PACKAGE ;;
    pip)   pip   install $PACKAGE ;;
  esac
  break # avoid infinite loop
done
```

</br>

This example, asks the user what package manager to use.

Then, it will ask what package we want to install and finally proceed to install it.

If we run this, we will get:

```txt
$ ./my_script
1) bower
2) npm
3) gem
4) pip
Choose the package manager: 2
Enter the package name: bash-handbook
<installing bash-handbook>
```

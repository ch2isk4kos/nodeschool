# Learn Bash

## FUNCTIONS (Exercise 10 of 11)

In scripts we have the ability to define and call functions.

As in any programming language, functions in bash are chunks of code,</br>
but there are other differences.

In bash, functions are a sequence of commands grouped under a single name,</br>
that is the name of the function.

Calling a function is the same as calling any other program,</br>
you just write the name and the function will be invoked.

</br>

We can declare our own function this way:

```bash
my_func () {
  # statements
}

my_func # call my_func
```

We must declare functions before we can invoke them.

</br>

Functions can take on arguments and return a result — exit code.

Arguments, within functions, are treated in the same manner as arguments given to the script in [non-interactive](#non-interactive-mode) mode — using [positional parameters](#positional-parameters).

A result code can be returned using the `return` command.

</br>

Below is a function that takes a name and returns 0, indicating successful
execution.

```bash
# function with params
greeting () {
  if [[ -n $1 ]]; then
    echo "Hello, $1!"
  else
    echo "Hello, unknown!"
  fi
  return 0
}

greeting World  # Hello, World!
greeting        # Hello, unknown!
```

The `return` command without any arguments returns the exit code of the last executed command.

Above, return 0 will return a successful exit code 0.

</br>

We can also declare a variable local to a single function using the local keyword.

Doing so causes the variable to disappear when the function exits.

`local local_var="I'm a local value"`

</br>

## THE CHALLENGE

Create a file named `functions.bash`.

The problem is almost the same as in the previous exercise.</br>
You receive two positional parameters and should output all even numbers in the range between them.

To do this, create a function with any name that will print these numbers using recursion.</br>
Also declare a function main that will print the value of $FUNCNAME and call your function.

In other words, you should build a tree of even numbers.</br>
On the top of the tree should be the name of the main function.</br>
Other elements must be even numbers.</br>
Each new element of the tree should have indentation that is equal to depth (one level is one space  ).

</br>

Example:

```txt
./loops.bash 10 17
```

Output:

```txt
main
  10
    12
      14
        16
```

</br>

## Fine

You may use functions to create your own commands in the terminal.

To do that, just define functions somewhere in your `~/.bashrc` file
(~/.bash_profile, ~/.zshrc for Zsh, etc). For example:

```bash
# ...
# other ~/.bashrc settings
# ...

# Make directory and jump inside
md() {
  mkdir -p $1 && cd $1
}
```

After that, update your settings using . ~/.bashrc and use this command as
any other:

```txt
~ $ md Projects
~/Projects $
```

</br>

## Aliases

By the way, sometimes you might type a long command sequence to do something.

If you often do this, you may want to define an alias.</br>
An alias is essentially like a keyboard shortcut, a means to avoid typing a long command sequence.

For example, if you often type a ls -alF command feel free to define an alias in the `~/.bashrc` file:

```bash
# ...
# other ~/.bashrc settings
# ...

alias ll='ls -alF'
```

Update your settings using `. ~/.bashrc` and now you can use the `ll` command,</br>
instead of the longer `ls -alF` command.

Now you have a good basic knowledge of Bash. In the next exercise we will
take a look at the debugging of bash scripts.
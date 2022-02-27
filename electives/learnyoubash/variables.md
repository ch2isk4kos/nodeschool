# Learn Bash

## VARIABLES (Exercise 2 of 11)

Like in most programming languages, you can also create variables in bash.

Bash knows no data types. Variables can contain only numbers or a string
of one or more characters. There are three kinds of variables you can
create: local variables, environment variables and variables as positional
arguments.

</br>

### Local variables

Local variables are variables that exist only within a single script. They
are inaccessible to other programs and scripts. A local variable can be
declared using = sign (as a rule, there should not be any spaces between a
variable's name, = and its value) and its value can be retrieved using the `$` sign.

For example:

```bash
foo="value"  # declare variable
echo $foo    # display value
unset foo    # delete variable
```

The variables can be used inside strings. But there is an important
difference between double and single quotes. Inside double quotes
variables are expanded. Inside single quotes they are not. For example:

```bash
NAME="Denys"
echo "My name is $NAME" #> My name is Denys
echo 'My name is $NAME' #> My name is $NAME
```

</br>

### Environment variables

Sometimes we need to declare variables which will be accessible from
outside the current shell session, for other programs, scripts, etc. These
variables are called environment variables. They are created just like
local variables, but using the keyword export instead.

```bash
export GLOBAL_VAR="I am a global variable"
```

There are a lot of global variables in bash. You will meet these variables
fairly often, so here is a quick lookup table with the most practical
ones:

```txt
Variable Description
-------- ----------------------------------------------------------------------------
$HOME    The current user's home directory.
$USER    The current user.
$PATH    A colon-separated list of directories in which the shell looks for commands.
$PWD     The current working directory.
$RANDOM  Random integer between 0 and 32767.
$UID     The numeric, real user ID of the current user.
$PS1     The primary prompt string.
$PS2     The secondary prompt string.
```

You may find extended list of environment variables in Bash:

<<http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html#sect_03_02_>
04>

</br>

## THE CHALLENGE

Create a file named `variables.bash` (of course using touch).

Your program should output your current username and directory name in the
following format:

User _USER_ in directory _PWD_.

</br>

## Awesome

Okay, you've done this!

Variables are a very important part of any programming language and now
you know how they work in Bash.

In this exercise you used the `$PWD` variable. In addition, there is also
the pwd command which returns the same thing as the `$PWD` variable, the
present working directory. So remember, when you need to get the current
directory name, use either the pwd command or the `$PWD` variable:

```bash
  pwd        #> /Users/username/learnyoubash/variables/
  echo $PWD  #> /Users/username/learnyoubash/variables/
```

Above you may notice special strings which start with the # sign. Do you
know what they are? They're comments.

Comments are special statements ignored by the shell interpreter. They
begin with a # symbol and continue on to the end of the line.

For example:

```bash
#!/bin/bash
# This script will print your username.
whoami
```

Use comments to explain what your script does and why.

In the next exercise we will use positional parameters. We will learn how
to handle the arguments which may be passed to your program.

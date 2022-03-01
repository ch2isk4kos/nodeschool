# Learn Bash

## CASE CONDITIONAL STATEMENT (Exercise 8 of 11)

If you are confronted with a couple of different possible actions to take,
then using a case statement may be more useful than nested if statements.

For more complex conditions use a case statement like below:

```bash
case "$FRUIT" in
  (apple)
    echo 'Mmmmh... I like apple!'
    ;;
  (banana)
    echo 'Hm, a bit awry, no?'
    ;;
  (orange|tangerine)
    echo "I don't like it!" && exit 1
  ;;
  (*)
    echo "Unknown fruit - sure it isn't toxic?"
  ;;
esac
```

Each case is an expression matching a pattern.

</br>

The `|` sign is used for separating multiple patterns, and the `)` operator terminates a pattern list.

The commands for the first match are executed.

`*` is the pattern for anything else that doesn't match the defined patterns.

Each block of commands should be divided with the `;;` operator.

</br>

## THE CHALLENGE

Create a file named `case.bash`.

In this exercise you will create a small image extensions checker.

Using a `case statement`, check if the first positional parameter is a jpeg (or
jpg), png, or gif extension.

Output `It is jpeg.`, `It is png.`, or `It is gif.` accordingly.

</br>

### NOTE

Take care about cases when the positional argument contains any other extension</br>
(print [EXT] is not an image! in these cases).

For example:

```txt
./case.bash png
./case.bash js
./case.bash jpg
```

Output:

```txt
It is png.
js is not an image!
It is jpeg.
```

</br>

## Cool

As you have seen, using case is much more convenient when you are confronted with a couple of different cases.

In this problem you were checking extensions. But how do we actually access a directory or filename?

We already know about pwd command that return full path to current directory.

However there are also other similar commands, like basename and dirname.

</br>

The basename command strips the directory and suffix from filenames such as:

```bash
basename path/to/file.ext  #> file
```

The dirname command strips the last component from a file name, like this:

```bash
dirname /path/to/file.ext  #> path/to
```

</br>

Run `man basename` and `man dirname` to learn more about these cool commands.

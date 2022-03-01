#!/usr/bin/env bash

i=$1
j=$2
space_count=1

even_nums() {
  if [[ $i -ge $j ]];then
    return 0
  fi

  if [[ $(( $i % 2 )) == 0 ]];then
    for (( n=0; n<space_count; n++ ));do
      echo -n " "
    done
    echo "$i"
    (( space_count=space_count+1 ))
  fi

  (( i=i+1 ))
  even_nums
}

main() {
  echo $FUNCNAME
  even_nums
}

main

# LEARNYOUBASH SOLUTION:

# greater_even() {
#   # return if it's out of range
#   [[ $1 -lt $2 ]] || return

#   indent="$3"
#   if [[ $(( $1 % 2 )) -eq 0 ]]; then
#     i=0
#     for (( i = 0; i < $indent; i++ )); do
#       echo -n ' '
#     done
#     echo $1

#     # update indent only if number is even
#     indent=$(( indent + 1 ))
#   fi

#   greater_even $(( $1 + 1 )) $2 $indent
# }

# main() {
#   echo $FUNCNAME
#   greater_even $1 $2 1
# }

# main $1 $2
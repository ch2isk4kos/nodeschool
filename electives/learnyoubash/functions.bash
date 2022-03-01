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
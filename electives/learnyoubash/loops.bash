#!/usr/bin/env bash

for (( i=$1; i<$2; i++ )); do
  if [[ $(( $i % 2 )) == 0 ]]; then
      echo $i
  else
      continue
  fi
done

# LEARNYOUBASH SOLUTION

# i=$1
# while [[ $i -lt $2 ]]; do
#   [ ! $(( $i % 2 )) -eq 0 ] || echo $i
#   i=$(( $i + 1 ))
# done
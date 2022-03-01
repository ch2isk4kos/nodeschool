#!/usr/bin/env bash
# items[0]=I
# items[1]=am
# tems[4]=and
items=(I am "${@:2:2}" and "${@:4:1}" )
echo ${items[*]}
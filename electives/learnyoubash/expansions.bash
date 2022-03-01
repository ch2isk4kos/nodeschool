#!/usr/bin/env bash

RESULT=$((($2 + $3)* $1 ))
echo project-$RESULT/{src,dest,test}/{index,util}.js
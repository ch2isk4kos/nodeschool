#!/usr/bin/env bash

case "$1" in
  (png)
    echo "It is png."
    ;;
  (jpg|jpeg)
    echo "It is jpeg."
    ;;
  (gif)
    echo "It is gif."
  ;;
  (*)
    echo "$1 is not an image!"
  ;;
esac
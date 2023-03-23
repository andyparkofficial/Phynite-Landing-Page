#!/bin/bash
export FRONT_DIR=/var/www

if [ -d $FRONT_DIR ]
then
 rm -rf $FRONT_DIR
fi

sudo mkdir -p $FRONT_DIR



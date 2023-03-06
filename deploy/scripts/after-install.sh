#!/bin/bash
export MINT_DIR=/var/www

if [ -d $MINT_DIR/scripts ]
then
 rm -rf $MINT_DIR/scripts
fi


if [ -f $MINT_DIR/appspec.yml ]
then
 rm -rf $MINT_DIR/appspec.yml
fi

#!/bin/bash
export FRONT_DIR=/var/www
export PORT=80
sudo pm2 --name Phynite-Front serve $FRONT_DIR $PORT --spa



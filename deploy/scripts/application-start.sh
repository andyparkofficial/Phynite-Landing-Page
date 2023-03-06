#!/bin/bash
export FRONT_DIR=/var/www
export PORT=80
sudo pm2 --name Phynite-Landing-Front serve $FRONT_DIR $PORT --spa



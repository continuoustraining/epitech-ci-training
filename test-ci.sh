#!/bin/bash

npm install
npm test

mysql -h mysql -uroot -e \
  "SELECT 40 + 2;"
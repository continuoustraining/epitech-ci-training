#!/bin/bash
npm install && npm test
mysql -h iskandre -u changeme -e \
  "SELECT 40 + 2;"

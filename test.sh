#!/bin/bash
echo "Apollo Server"
curl -w "@curl-format.txt" -o /dev/null -s 'http://localhost:4000/' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{hello}"}' --compressed
echo "Graphql Go"
curl curl -w "@curl-format.txt" -o /dev/null -s 'http://localhost:8080/graphql?query={user(id:"1"){name}}'
#!/bin/bash
# INSTANCIAR PROYECTO BASE JAVASCRIPT
npm init -y

# INSTALAR SUITE DE PRUEBAS JAVASCRIPT JEST
npm i -D jest

echo "yes,no,node,v8,yes"
# CONFIGURAR JEST
npx jest --init
echo "Ready"
exit 0;

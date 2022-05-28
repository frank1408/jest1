#!/bin/bash
# INSTANCIAR PROYECTO BASE JAVASCRIPT
npm init -y

# INSTALAR SUITE DE PRUEBAS JAVASCRIPT JEST
npm i -D jest

#echo "yes,no,yes y node,v8,yes"
# CONFIGURAR JEST
npx jest --init
echo "Comando para testing"
echo -e "\tnpm run test"
exit 0;

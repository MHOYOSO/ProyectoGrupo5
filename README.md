Siga los pasos a continuacion descritos para ejecutar los contenedores y conectarlos entre si.

pre-requisitos 📋

descarga docker desktop en el siguiente enlace 👇

https://www.docker.com/products/docker-desktop -- Escritorio Docker

----------------------------------------------------------------------------------------------
Instrucciones 🔧

Construccion 🛠️


En este repositorio y ejecute las siguientes instrucciones


docker build ./docker1 -t backend1
docker build ./docker2 -t backend2

----------------------------------------------------------------------------------------------

Despliegue 📦


Ejecute las imagenes creadas en el paso anterior con los siguientes comandos


docker run -p 3000:3000 -d backend1
docker run -p 4000:4000 -d backend2

----------------------------------------------------------------------------------------------

Deberia ver el siguiente mensaje desde cada enlace


Hello buddy, im running in the port: 3000
Hello buddy, im running in the port: 4000

----------------------------------------------------------------------------------------------

Conexión 🖇️


para realizar la conexión entre los dos contenedores debe crear una red de tipo brige y nombrarla


docker network create --driver bridge mynetwork

----------------------------------------------------------------------------------------------

revisar que ha creado su rojo


docker network inspect mynetwork

----------------------------------------------------------------------------------------------

conecte los contenedores con los siguientes comandos


docker run -dit --name backend1 --network mynetwork alpine ash
docker run -dit --name backend2 --network mynetwork alpine ash

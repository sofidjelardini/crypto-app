Holis :)

Bueno, para poder testear esto les dejo las urls para pegar en postman:

Para comprar:
curl -X POST http://localhost:3000/api/buy -H "Content-Type: application/json" -d '{"amount": 1}'

Para vender:
curl -X POST http://localhost:3000/api/sell -H "Content-Type: application/json" -d '{"amount": 1}'

Para consultar:
curl http://localhost:3000/api/portfolio

Y, por último, la parte de cómo podríamos escalar este proyecto en el futuro:
guardar en caché el precio del bitcoin por un determinado tiempo podría ser una opción, para no tener que estar llamando a la api externa constantemente, y también, guardar en base de datos la información de las compras, como así también conectarse con alguna api de compra/venta para que el valor almacenado sea una compra verdadera, no como en este caso, en el que estamos simulando la compra únicamente.
Iba a conectar la app a la api de binance, pero no me permite testear nada ya que claramente no tengo api key y api secret para poder usarlo jajaja

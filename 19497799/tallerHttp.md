# Taller 1 - Ingeniería Web

## Glosario:

### A) Request:
Es un mensaje o instrucción que permite enviar todo tipo de peticiones HTTP y procesarlas. [1]
### B) Response:
Luego de recibir un REQUEST, el servidor envia una respuesta. [2]
### C) Status Code:
Es una variable de 3 digitos que indica el estado del request. [3]
### D) Methods:  [4]
#### 1) GET: 
Solicita información o un recurso al servidor.
#### 2) POST:
Envia datos a un recurso especifico del servidor.
#### 3) HEAD:
Pide información igual a GET, pero sin su header.
#### 4) OPTIONS:
Describe las opciones de comunicacion del recurso de destino.
#### 5) PUT:
Reemplaza las representaciones del recurso actual.
#### 6) DELETE:
Borra un recurso especifico del servidor. 

### E) Header: [5]
Permite al cliente y al servidor enviar información adicional junto con un request o response.
#### 1. Accept, Accept-Charset, Accept-Encoding:
Informan sobre los tipos de contenido aceptados.
#### 2. Cache-Control:
Especifica el control especifico del cache.
#### 3. Connection:
Controla si la conexión se mantiene abierta luego de una transacción.
#### 4. Cookie, Set-Cookie:
El header Cookie contiene cookies previamente guardadas con el header Set-Cookie, los cuales son manejadas.
#### 5. Host:
Especifica el dominio del servidor.
#### 6. Origin:
Indica el origen del Fetch, pero solo el nombre del servidor.
#### 7. Referer: 
Contiene la dirección de la pagina de la que se viene.
#### 8. User-Agent:
Contiene la información necesaria para identificar el tipo de aplicación, sistema operativos, etc.
#### 9. Content-Encoding, Content-Length, Content-Type:
Indica las caracteristicas del recurso, especificamente la compresión, tamaño y el tipo de contenido.
#### 10. Location:
Indica un URL al cual redireccionar la pagina.
#### 11. Upgrade:
Pide al servidor que se actualice la versión de HTTP para funcionar.


##### Referencias:
```
[1] https://www.quora.com/What-is-an-HTTP-request
[2] https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.2.0/com.ibm.cics.ts.internet.doc/topics/dfhtl22.html
[3] https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[4] https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
[5] https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
```


| REQ/RES | Metodo HTTP | URL | Headers | Status |
| - | - | - | - | - |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/doku.php |  User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, X-UA-Compatible, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/bootstrap/default/bootstrap.min.css|User-Agent, Accept | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/css.php?t=bootstrap3&tseed=44b1422730da0b8e0624124cac9afe4b | User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Cache-Control, Pragma, ETag, Last-Modified, Vary, Content-Encoding, Content-Length, Content-Type | 200 | 
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/font-awesome/css/font-awesome.min.css | User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, X-UA-Compatible, Set-Cookie, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/dokuwiki/images/button-html5.png| User-Agent, Accept | |
| RES | | | Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, Connection, Content-Length, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/dokuwiki/images/button-dw.png | Upgrade-Insecure-Requests, User-Agent, Accept, Referer | 304 |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/dokuwiki/images/button-php.gif | User-Agent, Accept, Referer, Connection, Cache-Control | 304 |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/images/favicon.ico | User-Agent, Accept, Cache-Control | |
| RES | | | Date, Server, Last-Modified, ETag, Accept-Ranges, Content-Length, Keep-Alive, Connection, Content-Type | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/images/wrap.gif | Upgrade-Insecure-Requests, User-Agent, Accept, Referer, Connection | |
| RES | | | Server, Date, Content-Type, Transfer-Encoding, Connection, X-Powered-By, Expires, Last-Modified, Cache-Control | 200 |
| REQ | GET | http://zeus.inf.ucv.cl/~ifigueroa/lib/images/smaller.gif | User-Agent, Accept | |
| RES | | | Server, Date, Content-Type, Content-Length, Last-Modified, ETag, Accept-Ranges | 200 |


Pagina: Crunchyroll

| REQ/RES | Metodo HTTP | URL | Headers | Status |
| - | - | - | - | - |
| REQ | GET | https://www.crunchyroll.com/es/mob-psycho-100/episode-13-boss-fight-the-final-light-780932 | User-Agent, Accept, Connection, Cookie | |
| RES | | | cache-control, content-type| 200 |
| REQ | GET | https://www.crunchyroll.com/versioned_assets/css/www/view/showmedia.4201f524.css | User-Agent, Accept, Referer, Connection | |
| RES | | | content-type, etag, content-enconding, cache-control | 200 |
| REQ | GET | https://www.crunchyroll.com/js/lang/7930488456a4b045a1412308af5c2066/cr/esLA/showmedia.js | Accept, Referer, User-Agent, Connection | |
| RES | | | Content-type, cache-control, content-encoding, content-type, last-modified, x-cache, via | 200 |
| REQ | GET | https://img1.ak.crunchyroll.com/i/spire1-tmb/2cecaa866a889bd4b516a611fd16ee4a1552920588_wide.jpg | User-Agent, Accept | |
| RES | | | Content-type, Content-Length, Connection, Cache-Control | 200 |
| REQ | GET | https://a-vrv.akamaized.net/evs/ccfe428094da3d5c8989285863169332/assets/ccfe428094da3d5c8989285863169332_3648103.mp4/clipFrom/0000/clipTo/120000/seg-3-v1-a1.ts?t=st=1554692876 | User-Agent, Accept, Referer, Origin, Connection | |
| RES | | | Content-Length, Accept-Ranges, Content-Type, Akaimai-Mon-Iucid-Del, Connection, Access-Control | 200 |

Probé con un servicio de streaming, puesto que interactuaba mientras la pagina estaba en curso, con un video en reproducción, ciertas cosas cambiaban, o habían información sobre REQ/RES que decían que tenían un gran tamaño (puesto que no lo hice con HTTPtrace, sino con las herramientas de Firefox, podía ver el tamaño tranferido).
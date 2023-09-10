# API
### GET /products
return a list of all products

### GET /products/:partno
get the product with given partno

### POST /products
add a product to the collection, expects urlencoded body \
(e.g. "partno=183753&item=oatmeal&uom=kg&amount=2")

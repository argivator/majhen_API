# majhen_API

## Requirements
* git
* node.js (npm)
* mongodb

## Instructions
* start mongodb
* use the following commands in command line
```
git clone https://github.com/lbracun/majhen_API
cd majhen_API
npm install
npm start
```
* app is now running on `http://localhost:3000`

## API routes
* `[GET] /products` returns all products from db
* `[POST] /product` inserts new product to db, data should be `x-www-form-urlencoded`

Example POST:
```
{
name: "Computer 1",
price: 1500,
avalible: true
}
```
* `[GET] /product/:id` returns product with specific id
* `[DELETE] /product/:id` removes product with specific id
* `[PUT] /product` updates product with id, data should be `x-www-form-urlencoded`, id is required, other fields are optional

Example PUT:
```
{
id: 5b1a7ed83f244d27f466e275,
name: "Computer 2",
price: 2000,
avalible: false
}
```

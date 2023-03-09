# Title1
## Title2
### Title3
___
### Text

Some **strong**, _italic_, ~~text~~
`text`
> text
___
### Links / Img

[link](url)

[1]: https://www.youtube.com/
[2]: https://www.google.ru/
[YouTube][1]
[Google][2]
___
![My img](http://zabavniks.com/wp-content/uploads/killer_whale_32_27103224.jpg)
|Home|Movie|
|:--|--|
|![My img](http://zabavniks.com/wp-content/uploads/killer_whale_32_27103224.jpg)|![My img](http://zabavniks.com/wp-content/uploads/killer_whale_32_27103224.jpg)|

___
### List
- item
  - item

1. item
1. item
1. item
___
### Code

```js
const a = 1;
```
```shell 
npm i
```
```diff
-const a = 1;
+const a = 2;
```
___
### Table

|Name|count|
|:--|--|
|Dima|1|

___ 
### TODO

- [x] Learn1
- [ ] Learn2




## Backend / Features

The backend for the project is an online movie.

- Authorization
- JWT (+refresh token) / password logic
- Storing and adding movies

## Entities

```js
@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
      },
    ]),
    ConfigModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
```

Example request:

```js
@UsePipes(new ValidationPipe())
@Put('profile')
@HttpCode(200)
@Auth()
async updateProfile(@User('_id') _id: string, @Body() dto: UpdateUserDto) {
  return this.userService.updateProfile(_id, dto);
}
```

## Contributing

A simple build written for a movie watching [project]('https://github.com/Whyssz/cinema-online').

## Stack

> Node js ▪ Nest js ▪ Express js ▪ Mongoose ▪ TypeScript

## Installing

```shell
git clone https://github.com/Whyssz/cinema-online.git
```

Install all dependencies, in repo's root:

```shell
yarn
```

`You can use the npm`

## Running

Viewing url: http://localhost:4200

- dev: `yarn dev`

The other commands have default paths:

```json
"dev": "nest start --watch",
"build": "nest build",
"start": "nest start",
```

# Practice task
## TODO app with pages:
### 
Create a todo app,
on the `dashboard` page, create a single todo with an interface:
```ts
name: string
description: string
time: string (unix time stamp)
```
creation must be 3 inputs, 2 text + 1 dateTime  
write each task to redux, use reduxToolKit.  
Example of code in theme  
Any styling, even mui component is enough, otherwise use mui styled (without css)
Extra points:
* Save the result to firebase or SQL db (create a simple BE++ for this)  
* Deploy app in free deploy platform  
* Make a pokemon page, with slider or listing from pokemon api (free api)
upload 20 pokemon (ideally with upload more using the button) + make a card, another page.


# React base 1webit
It is build React application with core packages, complete list u can see in `package.json`  
Most popular what use and version  
- [React](https://reactjs.org/) 18
- [Redux](https://redux.js.org/) 8, [reduxjs/toolkit](https://redux-toolkit.js.org/) 1.8.5
- [formik](https://formik.org/) 2.2.9
- [Mui](https://mui.com/) 5.11
## Get started with project  
- Install [NodeJS](https://nodejs.org/en/) (skip if installed)  Use version 18 (Last LTS)
- `cp .env.template .env` - use for api url
- Run `yarn install`
- Project can use [turbo](https://turbo.build/repo/docs)
- Run `turbo dev` or `yarn dev`

## Styles
In this project used [Mui styled](https://mui.com/system/styled/)

## Components
Try to create component what u can use more times, put in `components` folder.  
Interface should be in the same folder what component  
Example AppBar component:
```
    components
    | appBar
        | AppBar.tsx
        | interface
            | appBar.interface.ts
```


### _Menu Items with filter_ project

> _Filtered menu items_ page

<!-- > Live demo [_here_](https://www.example.com). If you have the project hosted somewhere, include the link here. -->

<!-- <hr style="border:1px dotted lightblue"> </hr> -->

##### General Information

Purpose of the project is to train myself on:

- using useState,
- Iterating through the items data and filtering the rendered data based on item category

![](public/menuItems.gif)

##### Technologies Used

- React.Js

##### Code Elements

- Filtering and rendering items based on their categories:

```javascript
const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};
```

##### Installation and project setup

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application. You will then be able to access it at `localhost:3000`

##### Acknowledgements

Credits to an awesome instructor John Smilga!

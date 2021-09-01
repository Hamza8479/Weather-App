// callbacks

// const getRecipe = () => {
//   setTimeout(() => {
//     const recipeId = [2, 3, 56, 7];
//     console.log(recipeId);
// so when we have ids we want recipe againt that id so another setTimeout

//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: "pizza",
//           publisher: "Jerry",
//         };
//         console.log(`${id}: ${recipe.title} made by ${recipe.publisher}`);

//         setTimeout(
//           (publisher) => {
//             const recipe = {
//               title: "Burger",
//               publisher: publisher,
//             };
//             console.log(`another recipe of ${publisher} is ${recipe.title}`);
//             console.log(recipe);
//           },
//           1000,
//           recipe.publisher
//         );
//       },
//       1000,
//       recipeId[2]
//     );
//   }, 1500);
// };

// getRecipe();

// Promises

// const getIds = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([22, 3343, 565, 43]);
//     // reject([2, 45, 76]);
//   }, 1500);
// });

// const getRecipe = (recipeId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: "Pizza",
//           publisher: "Jerry",
//         };
//         resolve(`${id}: ${recipe.title} made by ${recipe.publisher}`);
//       },
//       1500,
//       recipeId
//     );
//   });
// };

// const getRelated = (publisher) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (pub) => {
//         const recipe2 = {
//           title: "Burger",
//           pub,
//         };
//         resolve(`Another item made by ${recipe2.pub} is ${recipe2.title}`);
//       },
//       1500,
//       publisher
//     );
//   });
// };

// getIds
//   .then((Ids) => {
//     console.log(Ids);
//     return getRecipe(Ids[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//     return getRelated("Hamza");
//   })
//   .then((publisher) => {
//     console.log(publisher);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async await

const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([22, 3343, 565, 43]);
    // reject([2, 45, 76]);
  }, 1500);
});

const getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const recipe = {
          title: "Pizza",
          publisher: "Jerry",
        };
        resolve(`${id}: ${recipe.title} made by ${recipe.publisher}`);
      },
      1500,
      recipeId
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        const recipe2 = {
          title: "Burger",
          pub,
        };
        resolve(`Another item made by ${recipe2.pub} is ${recipe2.title}`);
      },
      1500,
      publisher
    );
  });
};

// async automatically return a promise

const getRecipeAw = async () => {
  const Ids = await getIds;
  console.log(Ids);
  const recipe = await getRecipe(Ids[2]);
  console.log(recipe);
  const publisher = await getRelated("Jerry");
  console.log(publisher);

  return recipe; // with this return keyword it automatically resolve a promise so we use "then" for it
};

// getRecipeAw();

getRecipeAw().then((res) => console.log(`${res} is the best`));

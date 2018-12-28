const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Goodbye, world!");
  }, 1000);
});

ourPromise.catch(err => {
  console.log(err);
});

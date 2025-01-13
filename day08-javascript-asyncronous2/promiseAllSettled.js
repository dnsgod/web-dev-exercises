const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));
const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 1500));

Promise.allSettled([task1, task2, task3])
  .then((results) => {
    console.log("All tasks completed:");
    console.log(results);
  });

const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 completed"), 1000);
    });
};

const step2 = (result) => {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 completed"), 1000);
    });
};

const step3 = (result) => {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 3 is completed"), 1000);
    });
};

step1()
    .then(step2)
    .then(step3)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
const step1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Step 1 completed"), 1000);
    });
  };
  
  const step2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Step 2 completed"), 1000);
    });
  };
  
  const step3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Step 3 completed"), 1000);
    });
  };
async function runSteps() {
    try {
        const result1 = await step1();
        console.log(result1);
    
        const result2 = await step2();
        console.log(result2);
    
        const result3 = await step3();
        console.log(result3);
      } catch (error) {
        console.error(error);
      }
}

runSteps();
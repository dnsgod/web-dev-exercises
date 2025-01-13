const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function steps() {
    await delay(1000);
    console.log("Step 1");
    await delay(1000);
    console.log("Step 2");
    await delay(1000);
    console.log("Step 3");
}

steps();
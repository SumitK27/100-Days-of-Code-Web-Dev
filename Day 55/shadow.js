function shadowing() {
    let varA = 5;

    try {
        const varA = 10;
        console.log(varA); // 10
    } catch {
        console.log("An Error Occurred!");
    }

    console.log(varA); // 5
}

shadowing();

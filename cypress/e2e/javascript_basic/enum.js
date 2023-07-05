const browsers = {
    CHROME: "chrome",
    FF: "firefox",
    EDGE: "edge",
    SAFARI: "safari"
}

let browser = browsers.CHROME

function execute() {
    switch(browser) {
        case browsers.CHROME:
            console.log("Execute on chrome");
            break;
        case browsers.FF:
            console.log("Execute on firefox");
            break;
        case browsers.EDGE:
            console.log("Execute on edge");
            break;
        case browsers.SAFARI:
            console.log("Execute on safari");
            break;
    }
}

console.log(execute)
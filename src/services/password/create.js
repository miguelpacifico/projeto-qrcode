import chalk from "chalk";
import handler from "./handler.js";

async function createPassword() {
    const password = await handler();
    console.log("\n"+chalk.green.bold(password));
}

export default createPassword;
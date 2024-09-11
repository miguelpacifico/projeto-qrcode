import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold(
            "Escolha a ferramenta: [ 1 - QRCode ] - [ 2 - Password ] - [ 3 - URL amigavél]"
        ),
        pattern: /^[1-3]+$/,
        message: chalk.red.italic(
            "Escolha apenas entre 1 e 2."
        ),
        required: true,
    }
];

export default promptSchemaMain;
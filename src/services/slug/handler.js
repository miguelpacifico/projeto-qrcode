import chalk from "chalk";
import slug from "slug";

async function handler(err, result) {
    if(err){
        console.log("Error on application");
        return;
    };

    let url = slug(result.title);

    console.log(chalk.green(url + "\n"));
}

export default handler;
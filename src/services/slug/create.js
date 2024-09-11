import prompt from "prompt";
import promptSchemaSlug from "../../prompts-schema/prompt-schema-slug.js";
import handler from "./handler.js";

async function createSlug() {
    prompt.get(promptSchemaSlug, handler);
    prompt.start();
}

export default createSlug;
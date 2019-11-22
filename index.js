import Field from "./src/Components/Field.svelte";
import { valuesForm } from "./src/Components/stores";
import { form, bindClass } from "./src/Validation";

export { Field, valuesForm, form, bindClass };
export const formly = { Field, valuesForm, form, bindClass };

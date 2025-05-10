import { FormField } from "./form-builder.component";

export interface FormBuilderRouterLink {
  label: string;
  routerLink: string;
}

export interface FormBuilderConfig {
  title?: string;
  fields: FormField[];
  submitButtonLabel?: string;
  routersLinks?: FormBuilderRouterLink[];
}

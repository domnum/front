export interface ActivateAccountParams {
  email: string;
  token: string;
}

export interface ActivateAccountState {
  loading: boolean;
  success: boolean | null;
  errorMessage: string | null;
}

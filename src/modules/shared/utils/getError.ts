export enum HttpStatus {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  INTERNAL_SERVER = 500
}

export type ErrorResponse = {
  status: HttpStatus;
  message?: string;
  type: string | null;
};

export type ErrorState = {
  status: HttpStatus | null;
  message?: string;
  isError: boolean;
};

const getError = (status: HttpStatus, message: string): ErrorResponse => {
  return {
    type: 'error',
    status,
    message
  };
};

export default getError;

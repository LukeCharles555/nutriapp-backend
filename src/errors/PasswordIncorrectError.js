class PasswordIncorrectError extends Error {
  constructor(...params) {
    super('Password is incorrect', ...params);

    // Maintains proper stack trace for where our error is thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PasswordIncorrectError);
    }

    this.name = 'PasswordIncorrectError';
    this.status = 400;
  }
}

module.exports = PasswordIncorrectError;

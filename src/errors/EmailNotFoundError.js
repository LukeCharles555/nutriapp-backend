class EmailNotFoundError extends Error {
  constructor(...params) {
    super(`Failed to find an email for: ${params}`, ...params);

    // Maintains proper stack trace for where our error is thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EmailNotFoundError);
    }

    this.name = 'EmailNotFoundError';
    this.status = 404;
  }
}

module.exports = EmailNotFoundError;

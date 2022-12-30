class ValidationError extends Error {
  constructor(...params) {
    super(`Validation error: ${params}`, ...params);

    // Maintains proper stack trace for where our error is thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    this.name = 'ValidationError';
    this.status = 400;
  }
}

module.exports = ValidationError;

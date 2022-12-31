class UserNotAuthorized extends Error {
  constructor(...params) {
    super('You are not authorized to perform this request', ...params);

    // Maintains proper stack trace for where our error is thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UserNotAuthorized);
    }

    this.name = 'UserNotAuthorized';
    this.status = 401;
  }
}

module.exports = UserNotAuthorized;

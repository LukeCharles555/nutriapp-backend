/**
 * Error representing when an incorrect model is used to create a seed document
 */
class IncorrectModelError extends Error {
  /**
   * @param error - Error message
   */
  /* istanbul ignore next */
  constructor(error) {
    super(error);

    this.name = IncorrectModelError.name;

    Error.captureStackTrace?.(this, IncorrectModelError);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, IncorrectModelError.prototype);
  }
}

module.exports = IncorrectModelError;

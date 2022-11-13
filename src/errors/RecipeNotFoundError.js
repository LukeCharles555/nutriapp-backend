/**
 * Error representing when an incorrect model is used to create a seed document
 */
class RecipeNotFoundError extends Error {
  /**
   * @param error - Error message
   */
  /* istanbul ignore next */
  constructor(error) {
    super(error);

    this.name = RecipeNotFoundError.name;

    Error.captureStackTrace?.(this, RecipeNotFoundError);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, RecipeNotFoundError.prototype);
  }
}

module.exports = RecipeNotFoundError;

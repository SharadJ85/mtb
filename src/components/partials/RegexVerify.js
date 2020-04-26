/**
 * RegexVerify verify's the give string with the corresponding regex method.
 * @VerifyMethods
 * @method emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
 * @method nameRegex: /^(?=.*[A-Za-z])(?=.{2,})+$/
 * @method passwordRegex: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
 */

export default class RegexVerify {
  /**
   * check email with /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
   */
   emailRegex(value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  };

  /**
   * check name with /^(?=.*[A-Za-z])(?=.{2,})+$/
   */
   nameRegex(value) {
    const namePattern = /^[a-zA-Z]+(([,.'-][a-zA-Z ])?[a-zA-Z]+)+$/g;
    return namePattern.test(value);
  };

  /**
   * check password with /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
   */
   passwordRegex(value) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return passwordPattern.test(value);
  };
}

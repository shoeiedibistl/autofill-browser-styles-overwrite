/* ! ПРОВЕРИТЬ ! - автоматически может не сбрасываться состояние focus при очистке input.value скриптом, только после ручного прокликивания. 
теоретически может помочь дополнительная установка и снятие фокуса скриптом после такой очистки (проверить) */

const myForm = document.querySelector("[data-form]");
const myInputs = myForm.querySelectorAll("[data-input]");
const myClearButtons = myForm.querySelectorAll("[data-clear-input]");

myInputs.forEach((input) => {
  input.addEventListener("input", function () {
    const isAutoFilled = matches(this, ":-webkit-autofill");
    console.log(
      "test: " + (isAutoFilled ? "have autofill" : "dont have autofill")
    );

    if (isAutoFilled) {
      console.log("autofilled");

      setTimeout(() => {
        const temp = this.value;
        this.value = "";
        this.value = temp;
      }, 0);
    }

    isFilled(this);
  });
});

myClearButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const inputToClearWrapper = this.closest("[data-input-wrapper]");
    const inputToClear = inputToClearWrapper.querySelector("[data-input]");

    inputToClear.value = "";
    inputToClearWrapper.classList.remove("filled");
  });
});

function isFilled(input) {
  const inputWrapper = input.closest("[data-input-wrapper]");

  if (input.value === "") {
    inputWrapper.classList.remove("filled");
    return;
  }

  inputWrapper.classList.add("filled");
}

// https://www.bennadel.com/blog/3476-checking-to-see-if-an-element-has-a-css-pseudo-class-in-javascript.htm
// I determine if the given node matches the given selector.
function matches(node, selector) {
  // Most modern browsers support the ".matches" method. However, IE9+ uses a
  // non-standard method name. As such, we can fall-back to the IE version when
  // the standard one doesn't exist and that should cover all the modern
  // browsers that are in use.
  // --
  // READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
  var nativeMatches = node.matches || node.msMatchesSelector;

  // CAUTION: If an invalid pseudo-selector is used in Firefox or IE, the
  // browser will throw a SyntaxError, "is not a valid selector". It will do
  // the same for .querySelector() as well, just an FYI.
  try {
    return nativeMatches.call(node, selector);
  } catch (error) {
    // In the case of an error, we're going to assume it's a pseudo-selector
    // issue and NOT a general support issue (since we don't care about
    // really old browsers).
    return false;
  }
}

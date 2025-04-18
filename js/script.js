document.addEventListener("DOMContentLoaded", (evt) => {
  document.body.addEventListener("htmx:beforeSwap", (evt) => {
    /* Allow 422 responses to swap since we are using 422 to signal
     * that the form was submitted with bad data and we want to
     * rerender it with the erros
     */
    if (evt.detail.xhr.status === 422) {
      // Set isError to false to avoid error logging in console
      evt.detail.shouldSwap = true;
      evt.detail.isError = false;
    }
  });
});

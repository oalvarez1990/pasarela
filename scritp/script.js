(function () {
  var updateButton = document.getElementById("updateDetails");
  var cancelButton = document.getElementById("cancel");
  var compra_modal = document.getElementById("btn");

  // Update button opens a modal dialog
  updateButton.addEventListener("click", function () {
    console.log('Bien')
    compra_modal.showModal();
    console.log('aquiiiiiiiiiiiii')
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    compra_modal.close();
  });
})();

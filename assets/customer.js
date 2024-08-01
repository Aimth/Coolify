const customerSelectors = {
  customerAddresses: '[data-customer-addresses]',
  addressCountrySelect: '[data-address-country-select]',
  addressContainer: '[data-address]',
  toggleAddressButton: 'button[aria-expanded]',
  cancelAddressButton: 'button[type="reset"]',
  deleteAddressButton: 'button[data-confirm-message]',
};

const attributes = {
  expanded: 'aria-expanded',
  confirmMessage: 'data-confirm-message',
};

class CustomerAddresses {
  constructor() {
    this.elements = this._getElements();
    if (Object.keys(this.elements).length === 0) return;
    this._setupCountries();
    this._setupEventListeners();
  }

  _getElements() {
    const container = document.querySelector(customerSelectors.customerAddresses);
    return container
      ? {
        container,
        addressContainer: container.querySelector(customerSelectors.addressContainer),
        toggleButtons: document.querySelectorAll(customerSelectors.toggleAddressButton),
        cancelButtons: container.querySelectorAll(customerSelectors.cancelAddressButton),
        deleteButtons: container.querySelectorAll(customerSelectors.deleteAddressButton),
        countrySelects: container.querySelectorAll(customerSelectors.addressCountrySelect),
      }
      : {};
  }

  _setupCountries() {
    if (Shopify && Shopify.CountryProvinceSelector) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
        hideElement: 'AddressProvinceContainerNew',
      });
      this.elements.countrySelects.forEach((select) => {
        const formId = select.dataset.formId;
        // eslint-disable-next-line no-new
        new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {
          hideElement: `AddressProvinceContainer_${formId}`,
        });
      });
    }
  }

  _setupEventListeners() {
    this.elements.toggleButtons.forEach((element) => {
      element.addEventListener('click', this._handleAddEditButtonClick);
    });
    this.elements.cancelButtons.forEach((element) => {
      element.addEventListener('click', this._handleCancelButtonClick);
    });
    this.elements.deleteButtons.forEach((element) => {
      element.addEventListener('click', this._handleDeleteButtonClick);
    });
  }

  _toggleExpanded(target) {
    target.setAttribute(attributes.expanded, (target.getAttribute(attributes.expanded) === 'false').toString());
  }

  _handleAddEditButtonClick = ({ currentTarget }) => {
    this._toggleExpanded(currentTarget);
  };

  _handleCancelButtonClick = ({ currentTarget }) => {
    this._toggleExpanded(currentTarget.closest(customerSelectors.addressContainer).querySelector(`[${attributes.expanded}]`));
  };

  _handleDeleteButtonClick = ({ currentTarget }) => {
    // eslint-disable-next-line no-alert
    if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {
      Shopify.postLink(currentTarget.dataset.target, {
        parameters: { _method: 'delete' },
      });
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {

  // Get the elements with the classes 'login__recoverbt' and 'login__form'
  const recoverButton = document.querySelector(".login__recoverbt");
  const loginForm = document.querySelector(".login__form");

  // Function to add the 'show' class and 'hide' class
  function crtoggleClasses() {
    // Get the element with the class 'customer_recover'
    const customerRecover = document.querySelector(".customer_recover");

    // Check if the element exists and does not have the 'show' class
    if (customerRecover && customerRecover.classList.contains("hidden")) {
      // Add the 'show' class to the element with the class 'customer_recover'
      customerRecover.classList.remove("hidden");

      // Add the 'hide' class to the element with the class 'login__form'
      loginForm.classList.add("hidden");
    }
  }

  // Listen for the click event and call the toggleClasses function
  if (recoverButton) {
    recoverButton.addEventListener("click", crtoggleClasses);
  }

  // Get the element with the class 'customer_recover--cancel'
  const cancelBtn = document.querySelector(".customer_recover--cancel");

  // Function to handle cancel button click
  function handleCancel() {
    // Remove the 'hide' class from the element with the class 'login__form'
    loginForm.classList.remove("hidden");
    // Remove the 'show' class from the element with the class 'customer_recover'
    const parentCustomerRecover = this.closest(".customer_recover");
    parentCustomerRecover.classList.add("hidden");
  }

  // Listen for the click event on '.customer_recover--cancel' and call the handleCancel function
  if (cancelBtn) {
    cancelBtn.addEventListener("click", handleCancel);
  }

});
const editAddress = (function () {
  return {
    init: function () {
      this.handleEdit()
    },
    handleEdit: function () {
      const parent = document.querySelector('.customer-account__wrapper');
      if (!parent) return;
      const overlayBody = document.querySelector('.tp-close-overlay');
      document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('btn-edit')) {
          const itemAddress = el.closest('.tp-grid__item');
          const formEdit = itemAddress?.querySelector('.edit-address');
          formEdit.classList.add('show-edit');
          overlayBody.classList.add('is-visible-edit-address');
          document.querySelector('html').classList.add('tp-over-flow-hidden-edit-address');
        }
        if (el.classList.contains('edit-address__close')
          || !el.classList.contains('btn-edit')
          && !el.closest('.edit-address')) {
          const formEdits = document.querySelectorAll('.edit-address');
          formEdits.forEach(function(formEdit){
            formEdit.classList.remove('show-edit');
          })
          overlayBody.classList.remove('is-visible-edit-address');
          document.querySelector('html').classList.remove('tp-over-flow-hidden-edit-address');
        }
      })
    }
  }
})();
editAddress.init()

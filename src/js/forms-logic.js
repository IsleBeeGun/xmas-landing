// importing input mask plugin
import IMask from 'imask';
import sendHttpRequest from './sendHttpRequest';

// setting input masks
const inputMaskPhoneOptions = {
  mask: '+7 (000) 000-00-00',
};
const inputMaskTimeOptions = {
  mask: '00:00',
};

// Regular Expressions
const REGEX_PHONE = /^\+\d{1,2}\s+?\(\d{3,5}\)\s+?\d{1,3}-\d{2}-\d{2}$/;
const REGEX_NAME = /[^ ]/;
const REGEX_TIME = /^(?:\d|[01]\d|2[0-3]):[0-5]\d$/;

// Validation (suitable for all fields)
const setCssValid = target => {
  if (target.nextElementSibling) {
    target.nextElementSibling.children[0].classList.remove(
      'fa-check',
      'has-text-success',
      'has-text-danger'
    );
    target.nextElementSibling.children[0].classList.add(
      'fa-check',
      'has-text-success'
    );
  }
  showCheck(target);
  colorSuccess(target);
};
const setCssInvalid = target => {
  hideCheck(target);
  colorWarning(target);
};
const showCheck = target => {
  if (target.nextElementSibling) {
    target.nextElementSibling.classList.remove('is-invisible');
  }
};
const hideCheck = target => {
  if (target.nextElementSibling) {
    target.nextElementSibling.classList.add('is-invisible');
  }
};
const colorSuccess = target => {
  target.classList.add('fieldValid');
  target.classList.remove('fieldInvalid');
};
const colorWarning = target => {
  target.classList.add('fieldInvalid');
  target.classList.remove('fieldValid');
};
const validateField = (event, inputMask) => {
  let target = event.target;
  if (target.name == 'name') {
    // color validation
    REGEX_NAME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }
  if (target.name == 'phone') {
    // color validation
    REGEX_PHONE.test(target.value)
      ? setCssValid(target)
      : setCssInvalid(target);
  }
  if (target.name == 'from') {
    // color validation
    REGEX_TIME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }
  if (target.name == 'till') {
    // color validation
    REGEX_TIME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }
  if (target.name == 'city') {
    // color validation
    if (target.value === 'none') {
      colorWarning(target.nextElementSibling.firstChild);
      target.nextElementSibling.firstChild.style.borderColor = '#ffcc00';
    } else {
      //console.log(target.nextElementSibling);
      colorSuccess(target.nextElementSibling.firstChild);
      target.nextElementSibling.firstChild.style.borderColor =
        'hsl(141, 71%, 48%)';
      target.nextElementSibling.firstChild.style.color = 'rgb(54, 54, 54)';
    }
    //REGEX_NAME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }
  // if (target.name == 'day') {
  //   // color validation
  //   let month = target.closest('.field-body').children[1].children[0]
  //     .children[0];
  //   let year = target.closest('.field-body').children[2].children[0]
  //     .children[0];
  //   REGEX_DAY.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  //   if (
  //     REGEX_MONTH.test(month.value) &&
  //     REGEX_YEAR.test(year.value) &&
  //     REGEX_DAY.test(target.value)
  //   ) {
  //     setCssValid(year);
  //     setCssValid(month);
  //   } else {
  //     if (REGEX_YEAR.test(year.value)) {
  //       colorSuccess(year);
  //       hideCheck(year);
  //     } else {
  //       setCssInvalid(year);
  //     }
  //     REGEX_MONTH.test(month.value) ? colorSuccess(month) : colorWarning(month);
  //   }
  //   // reset if wrong
  //   if (!'0123'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  //   if (+target.value < 0 || +target.value > 31) {
  //     inputMask.value = '';
  //   }
  //   if (target.value === '00') {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }
  // if (target.name == 'month') {
  //   // color validation
  //   let day = target.closest('.field-body').children[0].children[0].children[0];
  //   let year = target.closest('.field-body').children[2].children[0]
  //     .children[0];
  //   REGEX_MONTH.test(target.value)
  //     ? setCssValid(target)
  //     : setCssInvalid(target);
  //   if (
  //     REGEX_DAY.test(day.value) &&
  //     REGEX_YEAR.test(year.value) &&
  //     REGEX_MONTH.test(target.value)
  //   ) {
  //     setCssValid(year);
  //     setCssValid(day);
  //   } else {
  //     if (REGEX_YEAR.test(year.value)) {
  //       colorSuccess(year);
  //       hideCheck(year);
  //     } else {
  //       setCssInvalid(year);
  //     }
  //     REGEX_DAY.test(day.value) ? colorSuccess(day) : colorWarning(day);
  //   }
  //   // reset if wrong
  //   if (!'01'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  //   if (+target.value < 0 || +target.value > 12) {
  //     inputMask.value = '';
  //   }
  //   if (target.value === '00') {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }
  // if (target.name == 'year') {
  //   // color validation
  //   let day = target.closest('.field-body').children[0].children[0].children[0];
  //   let month = target.closest('.field-body').children[1].children[0]
  //     .children[0];
  //   REGEX_YEAR.test(target.value)
  //     ? colorSuccess(target)
  //     : setCssInvalid(target);
  //   if (
  //     REGEX_DAY.test(day.value) &&
  //     REGEX_MONTH.test(month.value) &&
  //     REGEX_YEAR.test(target.value)
  //   ) {
  //     setCssValid(target);
  //   } else {
  //     REGEX_MONTH.test(month.value) ? colorSuccess(month) : colorWarning(month);
  //     REGEX_DAY.test(day.value) ? colorSuccess(day) : colorWarning(day);
  //   }
  //   // reset if wrong
  //   if (!'12'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }
};

export const handleFormByID = id => {
  // -- Getting form by id
  const form = document.querySelector(`#${id}`);
  // -- Name handling
  let name = form.elements.namedItem('name');
  name.addEventListener('input', validateField);
  // -- Phone handling
  let phone = form.elements.namedItem('phone');
  let inputMaskPhone = IMask(phone, inputMaskPhoneOptions);
  phone.addEventListener('input', event =>
    validateField(event, inputMaskPhone)
  );

  // -- Time handling
  let from = form.elements.namedItem('from');
  let inputMaskFrom = IMask(from, inputMaskTimeOptions);
  from.addEventListener('input', event => validateField(event, inputMaskFrom));

  let till = form.elements.namedItem('till');
  let inputMaskTill = IMask(till, inputMaskTimeOptions);
  till.addEventListener('input', event => validateField(event, inputMaskTill));

  // -- Region handling
  let city = form.elements.namedItem('city');
  city.addEventListener('change', validateField);

  // - Handling submit action
  form.addEventListener('submit', event => {
    console.log('clickkkked');
    event.preventDefault();
    if (
      !REGEX_NAME.test(name.value) ||
      !REGEX_PHONE.test(phone.value) ||
      !REGEX_TIME.test(from.value) ||
      !REGEX_TIME.test(till.value) ||
      city.value === 'none'
    ) {
      if (city.value === 'none') {
        city.focus();
        if (city.nextElementSibling.firstChild) {
          colorWarning(city.nextElementSibling.firstChild);
          city.nextElementSibling.firstChild.style.borderColor = '#ffcc00';
          city.nextElementSibling.firstChild.style.color = '#f2323f';
        }
      }
      if (!REGEX_NAME.test(name.value)) {
        name.focus();
        if (name.nextElementSibling) {
          name.nextElementSibling.classList.remove('is-invisible');
          name.nextElementSibling.children[0].classList.remove(
            'fa-check',
            'has-text-success'
          );
          name.nextElementSibling.children[0].classList.add(
            'fa-exclamation-triangle',
            'has-text-danger'
          );
        }
      }
      if (!REGEX_PHONE.test(phone.value)) {
        phone.focus();
        if (phone.nextElementSibling) {
          phone.nextElementSibling.classList.remove('is-invisible');
          phone.nextElementSibling.children[0].classList.remove(
            'fa-check',
            'has-text-success'
          );
          phone.nextElementSibling.children[0].classList.add(
            'fa-exclamation-triangle',
            'has-text-danger'
          );
        }
      }
      if (!REGEX_TIME.test(from.value)) {
        from.focus();
        if (from.nextElementSibling) {
          from.nextElementSibling.classList.remove('is-invisible');
          from.nextElementSibling.children[0].classList.remove(
            'fa-check',
            'has-text-success'
          );
          from.nextElementSibling.children[0].classList.add(
            'fa-exclamation-triangle',
            'has-text-danger'
          );
        }
      }
      if (!REGEX_TIME.test(till.value)) {
        till.focus();
        if (till.nextElementSibling) {
          till.nextElementSibling.classList.remove('is-invisible');
          till.nextElementSibling.children[0].classList.remove(
            'fa-check',
            'has-text-success'
          );
          till.nextElementSibling.children[0].classList.add(
            'fa-exclamation-triangle',
            'has-text-danger'
          );
        }
      }
    } else {
      const finCity = city.value;
      const finFrom = from.value;
      const finTill = till.value;
      const finName = name.value;
      const finPhone = phone.value.replace(/\s+/g, '');

      console.log(finCity, finFrom, finTill, finName, finPhone);

      // v------------------ Getting Recaptcha and sending request -----------------v
      //
      //
      // sendHttpRequest(body, 'http://testapi.euro-ins.ru/account/new', 'POST')
      //   .then(res => {
      //     console.log('[first res:]', res);
      //     document.querySelector('html').style.overflow = 'hidden';
      //     document.querySelector(
      //       '.modal-message'
      //     ).innerHTML = `<h3 class='has-text-success is-size-5'>Заявка на регистрацию успешно отправлена!</h3>`;
      //     document
      //       .querySelector('.modal-backdrop')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //     document
      //       .querySelector('.modal-window')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //   })
      //   .catch(rej => {
      //     if (rej === null) {
      //       const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p>Неизвестная ошибка</p>`;
      //       document.querySelector(
      //         '.modal-message'
      //       ).innerHTML = errorMessageHTML;
      //     } else {
      //       if (rej.errors) {
      //         const listOfErrors = [];
      //         let listOfErrorsHTML = '';
      //         for (const key in rej.errors) {
      //           listOfErrors.push(rej.errors[key]);
      //         }
      //         for (const error of listOfErrors) {
      //           listOfErrorsHTML += `<li class='mb-2'>${error}</li>`;
      //         }
      //         const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <ul>${listOfErrorsHTML}</ul>`;
      //         document.querySelector(
      //           '.modal-message'
      //         ).innerHTML = errorMessageHTML;
      //       } else {
      //         const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p>${rej.status}</p>`;
      //         document.querySelector(
      //           '.modal-message'
      //         ).innerHTML = errorMessageHTML;
      //       }
      //     }

      //     document.querySelector('html').style.overflow = 'hidden';
      //     document
      //       .querySelector('.modal-backdrop')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //     document
      //       .querySelector('.modal-window')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //   });
      //
      //
      // ^------------------ Getting Recaptcha and sending request -----------------^
    }
  });

  return form;
};

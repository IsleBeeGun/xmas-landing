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
const REGEX_NAME = /^[a-zA-Zа-яА-ЯёЁ ]{2,80}$/;
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
      colorSuccess(target.nextElementSibling.firstChild);
      target.nextElementSibling.firstChild.style.borderColor =
        'hsl(141, 71%, 48%)';
      target.nextElementSibling.firstChild.style.color = 'rgb(54, 54, 54)';
    }
  }
};
//////////////////////////////////////////////////////////////////////////////////////////
export const handleFormByID = id => {
  if (id === 'request-form') {
    const form = document.querySelector(`#${id}`);
    let name = form.elements.namedItem('name');
    name.addEventListener('input', validateField);
    let phone = form.elements.namedItem('phone');
    let inputMaskPhone = IMask(phone, inputMaskPhoneOptions);
    phone.addEventListener('input', event =>
      validateField(event, inputMaskPhone)
    );
    form.addEventListener('submit', event => {
      event.preventDefault();
      window.yaCounter70202242.reachGoal('send_form');
      //
      if (!REGEX_NAME.test(name.value) || !REGEX_PHONE.test(phone.value)) {
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
      } else {
        const finName = name.value;
        const finPhone = phone.value;
        const curMoment = new Date(Date.now());
        const finDate = `${curMoment.getFullYear()}.${
          curMoment.getMonth() + 1 > 9
            ? curMoment.getMonth() + 1
            : '0' + String(curMoment.getMonth() + 1)
        }.${curMoment.getDate()}`;
        const finTime = `${curMoment.getUTCHours() + 3}:${
          curMoment.getMinutes() > 9
            ? curMoment.getMinutes()
            : '0' + curMoment.getMinutes()
        }`;
        const finPolis =
          window.selectedInsurance === 'dms'
            ? 'ДМС СТОМАТОЛОГИЯ -50%'
            : window.selectedInsurance === 'ns'
            ? 'СТРАХОВКА ОТ НЕСЧАСТНОГО СЛУЧАЯ -40%'
            : window.selectedInsurance === 'property'
            ? 'СТРАХОВАНИЕ ИМУЩЕСТВА -30%'
            : window.selectedInsurance === 'kasko'
            ? 'КАСКО -50%'
            : 'ОШИБКА: ВЫБРАНО НЕВЕРНОЕ ЗНАЧЕНИЕ';
        //const finPhone = phone.value.replace(/\s+/g, '');
        const body = {
          insType:
            window.selectedInsurance === 'dms'
              ? 11
              : window.selectedInsurance === 'ns'
              ? 13
              : window.selectedInsurance === 'property'
              ? 3
              : window.selectedInsurance === 'kasko'
              ? 2
              : 0,
          name: finName,
          phone: finPhone,
          email: 'nomail@no.no',
          individual: true,
          comment: `Дата: ${finDate}, Московское время: ${finTime}, Полис: ${finPolis}`,
          agreement: true,
          region: '-',
        };

        // v------------------ sending request -----------------v
        //
        //
        sendHttpRequest(body, 'https://api.euro-ins.ru/claim/request', 'POST')
          .then(res => {
            //
            //
            document
              .getElementById('reqBackdrop')
              .setAttribute(
                'style',
                'display: none; visibility:hidden; opacity: 0;'
              );
            document
              .getElementById('reqWindow')
              .setAttribute(
                'style',
                'display: none; visibility:hidden; opacity: 0;'
              );
            document.querySelector('html').style.overflow = 'visible';
            //
            //
            document.querySelector('html').style.overflow = 'hidden';
            document.getElementById(
              'msgBody'
            ).innerHTML = `<h3 class="success">Спасибо, Ваша заявка отправлена.</h3>`;
            document
              .getElementById('msgBackdrop')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            document
              .getElementById('msgWindow')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            //
            //
          })
          .catch(rej => {
            if (rej === null) {
              const errorMessageHTML = `<h3 class='error'>Что-то пошло не так:</h3> <p class="has-text-warning">Неизвестная ошибка</p>`;
              document.getElementById('msgBody').innerHTML = errorMessageHTML;
            } else {
              if (rej.errors) {
                const listOfErrors = [];
                let listOfErrorsHTML = '';
                for (const key in rej.errors) {
                  listOfErrors.push(rej.errors[key]);
                }
                for (const error of listOfErrors) {
                  listOfErrorsHTML += `<li class='mb-2'>${error}</li>`;
                }
                const errorMessageHTML = `<h3 class='error'>Что-то пошло не так:</h3> <ul class="has-text-warning" style="list-style:square inside;padding:0;">${listOfErrorsHTML}</ul>`;
                document.getElementById('msgBody').innerHTML = errorMessageHTML;
              } else {
                const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p class="has-text-warning">${rej.status}</p>`;
                document.getElementById('msgBody').innerHTML = errorMessageHTML;
              }
            }
            //
            //
            document
              .getElementById('reqBackdrop')
              .setAttribute(
                'style',
                'display: none; visibility:hidden; opacity: 0;'
              );
            document
              .getElementById('reqWindow')
              .setAttribute(
                'style',
                'display: none;visibility:hidden; opacity: 0;'
              );
            document.querySelector('html').style.overflow = 'visible';
            //
            //
            document.querySelector('html').style.overflow = 'hidden';
            document
              .getElementById('msgBackdrop')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            document
              .getElementById('msgWindow')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            //
            //
          });
        //
        //
        // ^------------------ sending request -----------------^
      }
      return true;
    });
  } else {
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
    from.addEventListener('input', event =>
      validateField(event, inputMaskFrom)
    );

    let till = form.elements.namedItem('till');
    let inputMaskTill = IMask(till, inputMaskTimeOptions);
    till.addEventListener('input', event =>
      validateField(event, inputMaskTill)
    );

    // -- Region handling
    let city = form.elements.namedItem('city');
    city.addEventListener('change', validateField);

    // - Handling submit action
    form.addEventListener('submit', event => {
      event.preventDefault();
      window.yaCounter70202242.reachGoal('questions');
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
        const finPhone = phone.value;
        //const finPhone = phone.value.replace(/\s+/g, '');
        const body = {
          agreement: true,
          name: finName,
          phone: finPhone,
          region: finCity,
          timeFrom: finFrom,
          timeTo: finTill,
        };

        // v------------------ sending request -----------------v
        //
        //
        sendHttpRequest(
          body,
          'https://api.euro-ins.ru/claim/submit/callback',
          'POST'
        )
          .then(res => {
            document.querySelector('html').style.overflow = 'hidden';
            document.getElementById(
              'msgBody'
            ).innerHTML = `<h3 class="success">Спасибо, Ваша заявка отправлена.</h3>`;
            document
              .getElementById('msgBackdrop')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            document
              .getElementById('msgWindow')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
          })
          .catch(rej => {
            if (rej === null) {
              const errorMessageHTML = `<h3 class='error'>Что-то пошло не так:</h3> <p class="has-text-warning">Неизвестная ошибка</p>`;
              document.getElementById('msgBody').innerHTML = errorMessageHTML;
            } else {
              if (rej.errors) {
                const listOfErrors = [];
                let listOfErrorsHTML = '';
                for (const key in rej.errors) {
                  listOfErrors.push(rej.errors[key]);
                }
                for (const error of listOfErrors) {
                  listOfErrorsHTML += `<li class='mb-2'>${error}</li>`;
                }
                const errorMessageHTML = `<h3 class='error'>Что-то пошло не так:</h3> <ul class="has-text-warning" style="list-style:square inside;padding:0;">${listOfErrorsHTML}</ul>`;
                document.getElementById('msgBody').innerHTML = errorMessageHTML;
              } else {
                const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p class="has-text-warning">${rej.status}</p>`;
                document.getElementById('msgBody').innerHTML = errorMessageHTML;
              }
            }

            document.querySelector('html').style.overflow = 'hidden';
            document
              .getElementById('msgBackdrop')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
            document
              .getElementById('msgWindow')
              .setAttribute(
                'style',
                'display: block; visibility:visible; opacity: 1;'
              );
          });
        //
        //
        // ^------------------ sending request -----------------^
      }
      return true;
    });

    return form;
  }
};

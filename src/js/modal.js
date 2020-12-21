const msgWindow = document.getElementById('msgWindow');
const msgBackdrop = document.getElementById('msgBackdrop');
const msgExit = document.getElementById('msgExit');

const closeMsg = () => {
  msgBackdrop.setAttribute(
    'style',
    'display:block; visibility:hidden; opacity: 0;'
  );
  msgWindow.setAttribute(
    'style',
    'display:block; visibility:hidden; opacity: 0;'
  );
  document.querySelector('html').style.overflow = 'visible';
};

msgExit.addEventListener('click', event => {
  closeMsg();
});

msgBackdrop.addEventListener('click', event => {
  closeMsg();
});

////////////////

const reqWindow = document.getElementById('reqWindow');
const reqBackdrop = document.getElementById('reqBackdrop');
const reqExit = document.getElementById('reqExit');

const closeReq = () => {
  reqBackdrop.setAttribute(
    'style',
    'display:block; visibility:hidden; opacity: 0;'
  );
  reqWindow.setAttribute(
    'style',
    'display:block; visibility:hidden; opacity: 0;'
  );
  document.querySelector('html').style.overflow = 'visible';
};

reqExit.addEventListener('click', event => {
  closeReq();
});

reqBackdrop.addEventListener('click', event => {
  closeReq();
});

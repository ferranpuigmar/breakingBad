const checkDefaultLang = () => {
  const url = window.location.pathname.split('/');
  if (url[1] !== 'es' && !url.includes('en')) {
    url.splice(1, 0, 'es');
    window.location.assign(url.join('/'));
  }
};

export default checkDefaultLang;

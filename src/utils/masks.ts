export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return '';

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1');
};

export const normalizePriceOrKM = (value: string) => {
  if (!value) return '';
  return value.replace(/[\D]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};


export const normalizeYear = (value: string) => {
  if (!value) return '';

  return value
    .replace(/[\D]/g, '')
    .substring(0, 8)
    .replace(/(\d{4})(\d{4})/, '$1/$2');
};

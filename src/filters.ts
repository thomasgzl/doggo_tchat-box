import dayjs from 'dayjs';

export const date = (value: string, inFormat = 'YYYY-MM-DD', outFormat = 'DD MMMM YYYY') => {
    return dayjs(value, inFormat).format(outFormat);
  };

  export default { date };
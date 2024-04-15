const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export default dataFormatter;
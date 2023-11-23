export default function formateDate (inputDate){
    const date = new Date(inputDate);

  // Options for formatting the date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Format the date using the Intl.DateTimeFormat object
  const formatted = new Intl.DateTimeFormat('en-US', options).format(date);

  return formatted;
}
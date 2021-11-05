const formatDate = (date: string): string => {
    const formattedDate = new Date(date);
    const year = formattedDate.getUTCFullYear();
    
    const day = formattedDate.getUTCDate() > 9 ? 
    formattedDate.getUTCDate()
    : `0${formattedDate.getUTCDate()}`;

    const month = formattedDate.getUTCMonth() + 1 > 9 ? 
    formattedDate.getUTCMonth() +1
    : `0${formattedDate.getUTCMonth() + 1}`;

    console.log(day, month, year);

    return `${day}/${month}/${year}`;
}

export default formatDate;
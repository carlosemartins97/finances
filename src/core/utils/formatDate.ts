const formatDate = (date: string): string => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    
    const day = formattedDate.getDate() > 9 ? 
    formattedDate.getDate()
    : `0${formattedDate.getDate()}`;

    const month = formattedDate.getMonth() + 1 > 9 ? 
    formattedDate.getMonth() +1
    : `0${formattedDate.getMonth() + 1}`;



    return `${day}/${month}/${year}`;
}

export default formatDate;
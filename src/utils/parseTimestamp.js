export default function parseTimestamp (timestamp){

    // Create a Date object using the timestamp
    const dateObject = new Date(timestamp);

    // Format date as "dd/mm/yyyy"
        const day = String(dateObject.getDate()).padStart(2, '0');
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const year = dateObject.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        // Format time as "hh:mm tt"
        const hours = String(dateObject.getHours() % 12 || 12).padStart(2, '0');
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const ampm = dateObject.getHours() >= 12 ? 'pm' : 'am';
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        return{formattedDate , formattedTime}
}
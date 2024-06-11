/**
 * Extracts and formats the year from a date string or a Date object.
 * @param dateInput - The date input, either as a string or a Date object.
 * @returns The year as a string, or 'Unknown' if the date is invalid.
 */
export default function formatYear (dateInput: string | Date | undefined): string {
    if (typeof dateInput === 'string') {
        return dateInput.slice(0, 4)
    } else if (dateInput instanceof Date) {
        return dateInput.getFullYear().toString()
    } else {
        return 'Unknown'
    }
}

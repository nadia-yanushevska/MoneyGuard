export function getCurrentMonthYear() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Add 1 as months are zero-based
    const year = currentDate.getFullYear();

    return { month, year };
}

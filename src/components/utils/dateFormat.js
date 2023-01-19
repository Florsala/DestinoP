export const dateFormat = (date) => {
    try {
        return new Intl.DateTimeFormat('es', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(Date.parse(date))
    } catch (e) {
        return Date.parse(date)
    }
}
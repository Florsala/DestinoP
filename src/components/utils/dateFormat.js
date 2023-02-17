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

export const formatDate = (date)=>{
    const dia = date.getDate().toString()
    const mes = (date.getMonth()+1).toString()
    const año = date.getFullYear().toString()
   
    return `${mes.length ===1? `0${mes}`: mes}-${dia.length ===1? `0${dia}`: dia}-${año}`
 }
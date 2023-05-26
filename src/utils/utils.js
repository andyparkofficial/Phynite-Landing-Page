import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker"

const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

export function formatDateObject(dateObject) {
    const date = new Date(dateObject)
    const month = date.getMonth()
    let formattedDate = ""
    formattedDate += shortMonths[month]
    formattedDate += " "
    formattedDate += date.getDate()
    formattedDate += ", "
    formattedDate += date.getFullYear()

    return formattedDate
    
} 

export function getShortenedString(string, length) {
    if (string.length <= length) {
        return string
    } else {
        return string.slice(0,length) + "..."
    }
}

export function recordPageView(pageName) {
    const eventTracker = useAnalyticsEventTracker(pageName)
    eventTracker()
}
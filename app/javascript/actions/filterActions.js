export const toggleFilter = (filterName, status) => {
    return { type: 'TOGGLE_FILTER', filterName, status }
}
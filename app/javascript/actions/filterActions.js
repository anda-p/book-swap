export const toggleFilter = (filterName, enable) => {
    return { type: 'TOGGLE_FILTER', filterName, enable }
}
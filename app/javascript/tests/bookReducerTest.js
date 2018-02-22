import bookReducer from '../reducers/bookReducer';

const xBook = { title: 'X', tags: ["Dev", "Beginner"], displayed: true };
const yBook = { title: 'Y', tags: ["Dev"], displayed: true };
const zBook = { title: 'Z', tags: ["Agile", "Beginner"], displayed: true };

describe('book reducer', () => {
  describe('TOGGLE_FILTER action', () => {
    it('should keep books with tag displayed when filter enabled', () => {
      const state = [xBook, yBook, zBook];
  
      expect(bookReducer(state, { type: 'TOGGLE_FILTER', filterName: "Dev", enable: true }))
        .toEqual([{ title: 'X', tags: ["Dev", "Beginner"], displayed: true },
                  { title: 'Y', tags: ["Dev"], displayed: true }, 
                  { title: 'Z', tags: ["Agile", "Beginner"], displayed: true }])
    })
  
    it('should hide books with tag when filter disabled', () => {
      const state = [xBook, yBook, zBook];
  
      expect(bookReducer(state, { type: 'TOGGLE_FILTER', filterName: "Dev", enable: false }))
        .toEqual([{ title: 'X', tags: ["Dev", "Beginner"], displayed: false },
                  { title: 'Y', tags: ["Dev"], displayed: false }, 
                  { title: 'Z', tags: ["Agile", "Beginner"], displayed: true }])
    })
  
    it('should keep books with tag hidden when filter disabled', () => {
      const state = [{...xBook, displayed: false}, yBook, {...zBook, displayed: false} ];
  
      expect(bookReducer(state, { type: 'TOGGLE_FILTER', filterName: "Beginner", enable: false }))
        .toEqual([{ title: 'X', tags: ["Dev", "Beginner"], displayed: false },
                  { title: 'Y', tags: ["Dev"], displayed: true }, 
                  { title: 'Z', tags: ["Agile", "Beginner"], displayed: false }])
    })
  
    it('should display books with tag when filter enabled ', () => {
      const state = [{...xBook, displayed: false}, yBook, {...zBook, displayed: false} ];
  
      expect(bookReducer(state, { type: 'TOGGLE_FILTER', filterName: "Beginner", enable: true }))
        .toEqual([{ title: 'X', tags: ["Dev", "Beginner"], displayed: true },
                  { title: 'Y', tags: ["Dev"], displayed: true }, 
                  { title: 'Z', tags: ["Agile", "Beginner"], displayed: true }])
    })

    it('disabling then enabling a filter returns same state ', () => {
      const initialState = [xBook, yBook, zBook];
      const disabledState = bookReducer(initialState, { type: 'TOGGLE_FILTER', filterName: "Dev", enable: false });
      const finalState = bookReducer(disabledState, { type: 'TOGGLE_FILTER', filterName: "Agile", enable: true });

      expect(finalState)
        .toEqual(initialState);
    })

    it('combinations of filters works', () => {
      const initialState = [xBook, yBook, zBook];
      const disabledState = bookReducer(initialState, { type: 'TOGGLE_FILTER', filterName: "Dev", enable: false });
      //const finalState = bookReducer(disabledState, { type: 'TOGGLE_FILTER', filterName: "Agile", enable: true });

      expect(disabledState)
        .toEqual(initialState);
    })
  })
})
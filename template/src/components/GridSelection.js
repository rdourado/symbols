const COLS = {{COLS}}
const ROWS = {{ROWS}}

const gridCells = Array(COLS * ROWS)
  .fill(null)
  .map((_, index) => ({
    col: (index % COLS) + 1,
    row: Math.floor(index / COLS) + 1
  }))

export const GridSelection = {
  extend: Flex,

  state: {
    coordinates: { col: 0, row: 0 }
  },

  props: {
    theme: 'document',
    flow: 'column',
    gap: 'B',
    padding: 'A1 B',
    round: 'A',
    boxShadow: '0px 5px 35px -10px #00000059'
  },

  H1: {
    text: 'Grid Selection',
    fontSize: 'A',
    fontWeight: '700'
  },

  Border: {
    props: {
      background: 'white',
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 'Z',
      round: 'A',
      boxShadow: '0px 0px 50px 0px #0000000D'
    },
    Grid: {
      attr: { role: 'grid' },
      rows: `repeat(${ROWS}, 1fr)`,
      columns: `repeat(${COLS}, 1fr)`,
      gap: 'X',
      round: 'Y',
      overflow: 'hidden',
      children: gridCells,
      childrenAs: 'state',
      childExtends: Button,
      childProps: (_, state) => {
        const { col: currentCol = 0, row: currentRow = 0 } = state.parent.coordinates ?? {}
        const cols = `${state.col} ${state.col > 1 ? 'columns' : 'column'}`
        const rows = `${state.row} ${state.row > 1 ? 'rows' : 'row'}`
        const isActive = state.col <= currentCol && state.row <= currentRow
        return {
          attr: {
            'aria-label': `${cols} × ${rows}`,
            'aria-pressed': `${isActive}`
          },
          aspectRatio: '1 / 1',
          background: isActive ? 'blue' : 'blueLight',
          padding: 'Z1',
          round: 0,
          onClick: (_, __, state) => {
            state.parent.update({ coordinates: { ...state } })
          }
        }
      }
    }
  },
  Flex: {
    state: 'coordinates',
    align: 'center space-between',
    P_1: {
      text: 'Selection coordinates: ',
      color: 'gray',
      fontSize: 'Y2',
      margin: 0,
      Span: {
        text: (_, { col, row }) => `${col},${row}`,
        color: 'black'
      }
    },
    P_2: {
      text: 'Total cells selected: ',
      color: 'gray',
      fontSize: 'Y2',
      margin: 0,
      Span: {
        text: (_, { col, row }) => `${col * row}`,
        color: 'black'
      }
    }
  }
}

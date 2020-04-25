export default {
  tasks: {
    't1': { id: 't1', content: 'task 1' },
    't2': { id: 't2', content: 'task 2' },
    't3': { id: 't3', content: 'task 3' },
    't4': { id: 't4', content: 'task 4' },
    't5': { id: 't5', content: 'task 5' }
  },
  columns: {
    'col1': {
      id: 'col1',
      title: 'To Do',
      taskIds: ['t1', 't2', 't3', 't4', 't5']
    },
    'col2': {
      id: 'col2',
      title: 'In progress',
      taskIds: []
    },
    'col3': {
      id: 'col3',
      title: 'Done',
      taskIds: []
    }
  },

  columnOrder: ['col1', 'col2', 'col3']
}
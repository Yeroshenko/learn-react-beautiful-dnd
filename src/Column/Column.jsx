import React, { Component } from 'react'
import cn from 'classnames'
import { Droppable } from 'react-beautiful-dnd'

import Task from '../Task/Task'
import './Column.sass'

class Column extends Component {
  render() {
    const { tasks, column } = this.props
    return (
      <div className='column'>
        <h3 className='column__title'>{column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <div
              className={cn('column__tasks', {
                'column__tasks--in-dragging': snapshot.isDraggingOver
              })}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}

export default Column

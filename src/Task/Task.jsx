import React, { Component } from 'react'
import cn from 'classnames'
import { Draggable } from 'react-beautiful-dnd'

import './Task.sass'

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className={cn('task', { 'task--in-dragging': snapshot.isDragging })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Task

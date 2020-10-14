import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`;
class Task extends React.Component {
    render() {
        return (
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                    {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <div style={
                                {
                                    backgroundColor: snapshot.isDragging ? "#eee": null,
                                    transform: snapshot.isDragging ? "rotate(-1deg)" : null
                                }
                            }>
                                {this.props.task.content}
                            </div>
                        </Container>
                    )}
                </Draggable>
            );
    }
}

export default Task;
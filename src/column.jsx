import React from "react";
import Task from "./task";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    max-width: 400px;
`;
const Title = styled.h3`
    padding: 8px
`;
const TaskList = styled.div`
    padding: 8px
`;

class Column extends React.Component {

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <TaskList
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}

export default Column;
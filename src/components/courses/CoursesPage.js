import React from "react";
import {connect} from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {


    componentDidMount() {
        this.props.actions.loadCourses().catch(error => {
            alert("errorrr");
        })
    }

    render() {
        return (
            <> 
                <h2>Courses</h2>
               
                {this.props.courses.map(course => (
                    <div key={course.title}>
                        {course.title}
                    </div>
                ))}    
            </>
        )
    }
}

CoursePage.PropTypes = {
    courses: propTypes.func.isRequired, 
    actions: propTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
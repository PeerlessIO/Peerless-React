const ProjectSummaryComponent = React.createClass({
    render: function() {
        return (
            <div>
                <img src="public/images/project1.png"></img>
                <ProjectSummaryDetails />
            </div>
        );
    },
});

const ProjectSummaryDetails = React.createClass({
    render: function() {
        return (
            <div>
                <ProjectHeader 
                    title = "Learn React!"
                    instructor = "Chris Lankford"
                />
                {/*
                <ProjectTimeline />
                <Tags />
                */}
            </div>
        );
    },
});

const ProjectHeader = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.title}
                {this.props.instructor}
            </div>
        );
    },
});

ReactDOM.render(
    <ProjectSummaryComponent />,
    document.getElementById('content')
);
const ProjectSummaryComponent = React.createClass({
    render: function() {
        return (
            <div>
                <img src="images/project1.png"></img>
                <ProjectSummaryDetails />
            </div>
        );
    },
});

const ProjectSummaryDetails = React.createClass({
    render: function() {
        return (
            <div>
                ProjectSummaryDetails Component
            </div>
        );
    },
});

ReactDOM.render(
    <ProjectSummaryComponent />,
    document.getElementById('content')
);
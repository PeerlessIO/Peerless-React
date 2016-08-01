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
                <ProjectTimeline 
                    startDate = "2017-06-30"
                    effort = "45"
                    participants = "324"
                />
                {/*
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

const ProjectTimeline = React.createClass({
    render: function() {
        const daysUntilStart = moment(this.props.startDate).diff(moment(), "days");
        return (
            <div>
                {this.props.effort} hours of work
                {daysUntilStart} days until kickoff
                {this.props.participants} peers participating
            </div>
        );
    },
});

ReactDOM.render(
    <ProjectSummaryComponent />,
    document.getElementById('content')
);
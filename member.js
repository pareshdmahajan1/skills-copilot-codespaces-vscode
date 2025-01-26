function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        replace: true,
        templateUrl: '/app/views/templates/skills-member.html',
        scope: {
            skill: '='
        }
    };
}
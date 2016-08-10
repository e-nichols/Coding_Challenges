function condenseMeetingTimes(meetings){
    var condensedTimes = [];

    for(var i=0; i < meetings.length; i++){
        var shouldInsert = true;
        var currentMeeting = meetings[i];
        var newEndTime = currentMeeting.endTime;

        for(var j=0; j<meetings.length; j++){
            var compareMeeting = meetings[j];
            if(newEndTime >= compareMeeting.startTime && newEndTime < compareMeeting.endTime){
                newEndTime = compareMeeting.endTime;
            }
        }

        //check if it necessary to insert a new condensed Meeting time
        //only push if we haven't covered this range yet.
        condensedTimes.forEach(function(meeting){
            if(meeting.startTime <= currentMeeting.startTime && meeting.endTime >= newEndTime){
                shouldInsert = false;
            }
        });

        if(shouldInsert){
            condensedTimes.push({startTime: currentMeeting.startTime, endTime: newEndTime});
        }
    }
    return condensedTimes;
}

var meetingArray =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

function condenseMeetingTimesOptimal(meetings){
    //sort the array so only potential meetings to merge are next to each other.
    var sortedMeetings = meetings.slice().sort(function(a,b){
        return a.startTime > b.startTime ? 1 : -1;
    });

    var mergedMeetings = [sortedMeetings[0]];
    for(var i=1; i<sortedMeetings.length; i++){
        var currentMeeting = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length-1];

        if(currentMeeting.startTime <= lastMergedMeeting.endTime){
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        }
        else{
            mergedMeetings.push(currentMeeting);
        }
    }
    return mergedMeetings;
}

console.log(condenseMeetingTimesOptimal(meetingArray));

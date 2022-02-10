function mergeRanges(meetings){


    const copyOfMeetings = JSON.parse(JSON.stringify(meetings));

    const sortedMeetings = copyOfMeetings.sort((a,b)=>{
        return a.startTime - b.startTime
    });


    const mergedMeetings = [sortedMeetings[0]];

    for (let i = 0; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeetings = mergedMeetings[mergedMeetings.length - 1 ];

        if (lastMergedMeetings.endTime >=  currentMeeting.startTime) {
            lastMergedMeetings.endTime = Math.max(lastMergedMeetings.endTime,currentMeeting.endTime);
            
        } else {
            mergedMeetings.push(currentMeeting);
        }
        
    }

    return mergedMeetings


}



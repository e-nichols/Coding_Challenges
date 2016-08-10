This problem is tricky, but I surprisingly was able to get a partially correct solution with only one hint, and writing everything down on paper first! However this was using O(n^2) time, which is not ideal.

A note here is that it is acceptable, and very wise, to consider the benefits of sorting the array if you're dealing with a runtime of O(n^2) or greater. Because we know that sorting will take at worst O(nlgn) time, it can not actually worsen the runtime, and could indeed improve it.

And here, quite obviously, it helps to sort the array of meeting objects by start time, because it allows us to examine potential merges. If we consider the meeting with the earlier start time to be FIRST, then we know we can merge this meeting with another meeting IF the first meeting endTime is Greater Than or Equal to the second meeting start time.

If this condition is met, we can merge the two meetings together, using the start time from the first and using the MAX of the two end times from the second. I did not think of taking the MAX of the two end times, but consider the case:

meeting 1 = {startTime: 0, endTime: 10};
meeting 2 = {startTime: 5 endTime: 8};

Taking the max accounts for situations where the first meeting completely envelopes the second. That is to say, the first meeting both starts earlier and ends later than the second meeting.

What are some takeaways here...

Consider the benefits of sorting if you're dealing with O(n^2) runtime or above.
Start with a small example and build from there. This was especially helpful in defining the if statement conditions.

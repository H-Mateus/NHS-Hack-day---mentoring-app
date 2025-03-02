# Mentoring in healthcare app - NHS hack day Cardiff 2025

# App name - TorMentor!

The app is indented to facilitate mentoring in a healthcare setting.

Much of mentoring is not well recorded or measured, and so the impacts are hard to evaluate.
This app is indented to make mentoring more accessible and provide data to (hopefully!) demonstrate efficacy. 

# Features

- Facilitate scheduling meetings
    - Sign up with your GMC ID, availability, in-person/virtual/no preference
    - Then given a list of available mentors to choose and schedule first meeting

# Physical design

- Meetings tab (shared with relevant mentors)
    - Prior meeting
    - Upcoming meetings
        - button to notes associated with meetings
    - Button to organise a new meeting
- Notes/goals tab (private - maybe used for semantic analysis broadly)
    - Global/meetings associated notes
    - Goals that have been set
        - optional timeline
- Profile tab (private)
    - personal details and settings
    - GMC ID
    - email
    - Location/duration of post/speciality/grade (prompt to update location a month after post ends)
    - brief blurb about self (to be seen mentors/mentees)
    - protected characteristics (optional)

# Notification post meeting

2 Hours after a meeting is schedule led to end:
    - Both mentor and mentee receive a notification to provide feedback on meeting
        - Overall how satisfied with the meeting (1-10)
        - For mentee
            - Optional goals you might like to set or pre-existing ones to associate with meeting: by <date> I will have done <x> and I will feel <x>
        - For mentor
            - optional notes to add (what when well, what could be improved)

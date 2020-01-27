# components
-login
-signup
-navigation
    -logout
    -my plants
        -displays all plants
        -edit plants
        -add plants
    -schedule
        -today
        -next day
        -this week

# requirements
### app
[x] - if no user is logged in, app should only render login / signup

### my plants
[ ] - displays all plants
[ ] - user can edit plants
[ ] - user can add plants
[ ] - user can delete plants

### schedule
[ ] - displays the schedule for the current selected day
[ ] - displays the schedule for the current week


# state
{
    user: (string) username,
    plants: (array of objects),
    schedule: (object),
    selectedDay: (string),
    selectedWeek: (array)
}
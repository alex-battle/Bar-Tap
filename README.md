# Project Overview

## BarTap
Live Site : https://bartap.surge.sh

**Project description:** 
Search local bars in the area
## API Snippet

https://api.yelp.com/v3/businesses/40-40-club-new-york

```json
"id": "B-mnfJNSVNx1t_eQpnF1bA",
    "alias": "40-40-club-new-york",
    "name": "40/40 Club",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3YT_5fTtSoZ6CwWVF0ZwNg/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/40-40-club-new-york?adjust_creative=uN2tdEdntWbAxGoF9ZLszg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=uN2tdEdntWbAxGoF9ZLszg",
    "phone": "+12128324040",
    "display_phone": "(212) 832-4040",
    "review_count": 603,
    "categories": [
        {
            "alias": "sportsbars",
            "title": "Sports Bars"
        },
        {
            "alias": "lounges",
            "title": "Lounges"
        },
        {
            "alias": "venues",
            "title": "Venues & Event Spaces"
        }
    ],
    "rating": 3.0,
    "location": {
        "address1": "6 W 25th St",
        "address2": "",
        "address3": "",
        "city": "New York",
        "zip_code": "10010",
        "country": "US",
        "state": "NY",
        "display_address": [
            "6 W 25th St",
            "New York, NY 10010"
        ],
        "cross_streets": "Broadway & 5th Ave"
    },
```
## Wireframes

https://imgur.com/a/zXNt84U

### MVP

Use Yelp or Foursquare's API to search local bars by category and pull up 5-10 top bars. Sort them by Business name, address, hours on one page. Switching between different routes(Home page, bar type, list, and actual bar page). Lastly create a favorites page that saves users' favorite choices.


### Post-MVP

Add a map 
Add more cities

## React Component Hierarchy

https://imgur.com/a/UULsk4N

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header receives props that render multiple nav titles and links | Functional |
| Home | Refresh to main page on click | Function |
| Search | Create search bar that call on API that responds on enter  | Functional |
| Favorites | Hold favorites after favorite bars have been chosen | State |
| Main | This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |
| Bar Type | holds different categories and calls the API | Functional |
| Bar Info | holds 10 choices of bars and stock photo(Post MVP change stock photo into a map) | State |
| Bar page | Hold info of specific bar after clicked and chosen | State
| Footer | Navigate to links | Functional
| About us | Dummy Data | state
| Contact | Dummy Data some more | State
| Social Media | icons | State

## Priority Matrix

https://imgur.com/a/uSYwYTl

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Header | H | 4hrs| --hrs | --hrs |
| Search Bar | H | 2.5hrs | --hrs
| Working with API | H | 8hrs| --hrs | --hrs |
| Clickable Components | H | 14hr | --hrs | --hrs |
| Styling | H | 6hrs | -hrs | --hrs | 
| Total | H | 34.5hrs| --hrs | --hrs |

## Project Schedule 

| Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Set skeleton for routes and all pages/get API working  | Incomplete
|Jan 28th| Code make everything clickable  code/| Incomplete
|Jan 29th| CSS MVP | Incomplete
|Jan 30th| Touch-up/Post-MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

React Router Dom
/
Axios

## Issues and Resolutions
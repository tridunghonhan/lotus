# Use cases of Lotus

## Use Case 1: Users can CREATE a test case
1. Who: Testers/Developers 
2. What to do: CREATE a test case
3. Goal: Create and save a Test Case
4. Steps: 
    - Login
    - send a POST request to Lotus
        - Header: login Token
        - Body: a <TestCase> data
5. Responses:
    - 200: create success
    - 400: invalid request, testcase Name existed.
    - 401: unauthorized

## Use Case 2: Users can READ a test case
1. Who: Testers/Developers 
2. What to do: READ a test case
3. Goal: get a test case
4. Steps: 
    - Login
    - send a GET request to Lotus
        - Header: login Token
        - Body: {'name':"test case name"}
5. Responses:
    - Success:
        - HTTP Code: 200
        - Body: <TestCase>
    - Failed: unauthorized
        - HTTP Code: 401
        - Body: {'msg': 'unauthorized'}
    - Failed: Invalid request,
        - HTTP Code: 402
        - Body: {'msg': 'invalid request'}
    - Failed: test case not existed,
        - HTTP Code: 402
        - Body: {'msg': 'test case <name> not found'}


## Use Case 3: Users Trigger a test
1. Who: Testers/Developers 
2. What to do: start testing one case
3. Goal: execute the test with one command
4. Steps: 
    - Login
    - Make POST request to '/trigger/single
        - header: token
        - body: {'test_case_name': '<name>'}
5. Reponses:
    - Success:
        - HTTP Code: 200
        - Body: {'test_run_id': '<TestRunID>'}
    - Failed: unauthorized
        - HTTP Code: 401
        - Body: {'msg': 'unauthorized'}
    - Failed: Invalid request,
        - HTTP Code: 402
        - Body: {'msg': 'invalid request'}
    - Failed: test case not existed,
        - HTTP Code: 402
        - Body: {'msg': 'test case <name> not found'}


## Use Case 4: get the result of a test
1. Who: Testers/Developers 
2. What to do: retrieve test run information
3. Goal: Know the status of a test. 
4. Steps:
    - Login
    - Make GET request to '/test_run?test_run_id=<TestRunID>'
        - url parameter: test_run_id is return from 'trigger' call.
        - header: token
5. Reponses:
    - Success:
        - HTTP Code: 200
        - Body: {
            'test_run_id': '<TestRunID>',
            'start': <Date>, // when the test triggered
            'time': 15,// how many seconds from start to end this test
            'test_case_name': <name>,
            'events': [<Event>,<Event>,...],
            'verification': [<verify1>,<verify2>,...],
            'completed_by': event/timeout/(empty),
            'pass': true/false
        }
    - Failed: unauthorized
        - HTTP Code: 401
        - Body: {'msg': 'unauthorized'}
    - Failed: Invalid request,
        - HTTP Code: 402
        - Body: {'msg': 'invalid request'}
    - Failed: test case not existed,
        - HTTP Code: 402
        - Body: {'msg': 'test case <name> not found'}

##
--------------------------
## Terminology Definitions
1. <TestCase> is a JSON object that contains:
    - <name>: an uniq value 
    - Description
    - <Mock> configuration
    - An HTTP call to trigger testing
    - Expected Behavior includes
        - epxected response's header 
        - expected response's body
        - expected response http status code
        - expected latency
    - Completions
        - Timeout
        - Found events

2. <Mock> is a JSON object that contains:
    - Request Route
    - Request Url parameters
    - Request Header
    - Request Body
    - Response Header
    - Response Body
    - Response Delay

3. <Event> 
    - While testing, the under-test service and mocked services communicates each other. Each communication is an event.
    - Event is an JSON object contains:
        - date
        - src
        - des
        - data: string

4. <Verification>
    - The comparision of expected event and received event. 
    - A verification contains: 
        - expected data
            - URL Regex
            - Header Regex
            - data Regex // check against the "data" information in Event
        - matched <event>
        - matched text
        - isMatched: boolean
##
-----
# Heading level 1
## Heading level 2
### Heading level 3

I just love **bold text**.	
This text is ***really important***.
> Quote
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
>> Order list
1. First item
2. Second item

>> Unorder list
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

At the command prompt, type `nano`.

Link: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
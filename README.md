## Example Product Card View

# Overview 
The chosen assignment was Option #2 Category Shelves.

# Testing 
Each file should have a corresponding a test file with the exeption of the hooks file because I ran out of time. I used sinon, chia, and enzyme to test. I am less familiar with the react testing library so for speed's sake I chose to do with what is familiar even though the react testing library is becoming the general recommended framework. 

# Scripts 
 * start: starts the app at `http://localhost:3000/`
 * lint: lint the project based on recommended eslint rules 
 * build: builds the project 
 * test: runs all the test files in the project 

# Data loading
I use react hooks to "fetch" the data and also use it to mange app state. By "fetch" I mean I try to create an async behavior using a timeout to mimic a GET call. I then maninipulate the data and store it in react state.

If there was more time, I would have added a data store layer rather then relying on hooks. A lot of the data manipulation that is needed in this example can done once and then saved in the local storage to be reused. For example, you can abstract all product categories into a map whose key is `categoryId` and values are the products belonging to that category, that way looking by category is trivial and that mapping only needs to be done once on initial page load and when new data is fetched. 

# Taking it further 

### Features
I would use the tags and parent child relationships in the data to display more filtering options. 

For example maybe I would create a tree like structure in which you can move down categories. You can start with produce which is the parent category and then move into vegetable or fruit. 

The tags are also helpful to show organic options or dietary restrictions which would be good to filter on. 

### Design
I would have also broken down the component so the main level app no longer does state manegment and that would belong in a ProductView component. This improvement would be in addition to the data loading and store improvements.
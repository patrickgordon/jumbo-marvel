# Spec
## Acceptance Criteria
1. Must use the marvel API (https://developer.marvel.com/)
1. Primary language used must be JS
1. It must display a list of characters
1. Each character must link to their own details page
1. The layout must be responsive for desktop and mobile clients
1. Browser history must be maintained when navigating between views

## Considerations

When creating the app consider the following areas :
* Modern development practices
* Performance
* Scalability 
* Testability

# Libs
## Definite 
* Create React App
* React-Router - to address criteria #6

## Maybe
* Redux - business case required
* Reselect - business case required

# Routes
|Route             |Component    |
|------------------|-------------|
|Index             |`Characters` |
|`/characters/:id` |`Character`  |

# User flow
1. Hit the Index route which renders the `App` component and it's child `Characters`
1. `Characters` calls the Marvel API in the `componentWillMount` lifecycle method and updates the state
1. Clicking on a character link navigates to `/characters/:id` which will render the `Character` component
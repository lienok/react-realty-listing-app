# Reality House Listing App

This is a React based web application focused on providing house listings. The app fetches data from a `houses.json` file, which contains information about the houses available.

The app is designed with the following features:

## House Search
A user can perform a search for houses based on the country. The search results are displayed in a table format with each row representing a house. The table includes details about the house such as the address, price, and the number of likes the house has received.

Search is implemented using the React Router's `useParams` for fetching the search paramenter from the URL, and React's `useContext` for accessing the houses data. The `HousesContext` wraps the entire app, and provides the houses data to components that need it.

## House Details
When a user clicks on a row in the search results, they are directed to the house's detail page. This is handled by the `useNavigate` function from `react-router-dom`.

The house's detail page displays more specific information about the house. The details are retrieved based on the `id` of the house, which is passed as a param in the URL.

## Featured House
The homepage of the app showcases a featured house. This house is provided by a `useFeaturedHouse` hook, which retrieves the featured house based on the houses data.

All of these functionalities are packaged into a nice, user-friendly interface that relies on Bootstrap for styling. This app is a great starting point for anyone looking to develop a listing page for realty or even other items.

To get started with this app, follow the scripts provided in the `Available Scripts` section, which outlines procedures for starting the development server, running tests, building for production and more.
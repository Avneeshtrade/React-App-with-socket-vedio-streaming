const dev = {
    BASE_URL:"https://app.ticketmaster.com/discovery/v2",
    EVENT_CONSTANT:"events.json",
    API_KEY:"fTfnyxEaUJt1JE0vLL9rCWqMMFwrSqw8"
  };
  
  const prod = {
    BASE_URL:"https://app.ticketmaster.com/discovery/v2",
    EVENT_CONSTANT:"events.json",
    API_KEY:"fTfnyxEaUJt1JE0vLL9rCWqMMFwrSqw8"
  };
  
  const config = {
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;
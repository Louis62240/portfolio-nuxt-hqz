import Parse from 'parse/dist/parse.min.js';

export default defineNuxtPlugin(() => {
  Parse.initialize(
    'McJI5b1cBYcmfaTPCeTGaw1sQnj93nXqYkMORPyz', 
    'aLkZ9CBXOmPvHCVviScXI9cdcHyo4443J6qEXbGx' 
  );
  Parse.serverURL = 'https://parseapi.back4app.com';
});

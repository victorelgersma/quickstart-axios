import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({ text: "", by: "" });
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res);
        setQuote({ text: res.data.content, by: res.data.author });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={getQuote}> Get Quote</button>
      {quote && (
        <>
          <p>{quote.text}</p>
          <p>{quote.by}</p>
        </>
      )}
    </div>
  );
}

export default App;

// console.log(res)
// {
//   "data": {
//       "_id": "9gCEJkS5uaRS",
//       "content": "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
//       "author": "Nathaniel Hawthorne",
//       "tags": [
//           "Famous Quotes"
//       ],
//       "authorSlug": "nathaniel-hawthorne",
//       "length": 137,
//       "dateAdded": "2019-02-20",
//       "dateModified": "2023-04-14"
//   },
//   "status": 200,
//   "statusText": "",
//   "headers": {
//       "content-length": "329",
//       "content-type": "application/json; charset=utf-8"
//   },
//   "config": {
//       "transitional": {
//           "silentJSONParsing": true,
//           "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//       },
//       "adapter": [
//           "xhr",
//           "http",
//           "fetch"
//       ],
//       "transformRequest": [
//           null
//       ],
//       "transformResponse": [
//           null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "env": {},
//       "headers": {
//           "Accept": "application/json, text/plain, */*"
//       },
//       "method": "get",
//       "url": "https://api.quotable.io/random"
//   },
//   "request": {}
// }

# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project.

- A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)

- A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

- A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

- If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }

- An empty date parameter should return the current time in a JSON object with a unix key

- An empty date parameter should return the current time in a JSON object with a utc key

## API Reference

#### Get given date's UTC string and Unix timestamp in milliseconds

```http
  GET /api/:date
```

| Parameter | Type     | Description                                            |
| :-------- | :------- | :----------------------------------------------------- |
| `date`    | `string` | In YYYY/MM/DD format or Unix timestamp in milliseconds |

#### Get item

```http
  GET /api
```

| Parameter | Type | Description                                                         |
| :-------- | :--- | :------------------------------------------------------------------ |
| -         | -    | Return current date's UTC string and Unix timestamp in milliseconds |

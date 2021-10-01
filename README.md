###

```gql
mutation createLesson($name: String!, $startDate: String!, $endDate: String!) {
  createClass(name: $name, startDate: $startDate, endDate: $endDate) {
    name
  }
}
{
  "name": "Math A",
  "startDate": "2021-10-01T10:17:05.015Z",
  "endDate": "2021-10-01T10:22:05.015Z"
}
```

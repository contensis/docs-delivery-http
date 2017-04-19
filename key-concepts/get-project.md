# Get a single project

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**

## Example request

```http
GET: /api/delivery/projects/movieDb
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Project](/model/project.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

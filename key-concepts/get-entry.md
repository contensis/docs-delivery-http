# Get a single entry

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/entries/**{entryId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier |
| entryId | path | string | GUID | The entry identifier as a 128 bit GUID |
| language | query | string | | The specified language variation for the entry. If no value is provided then the projects primary language is used |
| linkDepth | query | number | int | The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Example request

```http
GET: /api/delivery/projects/movieDb/entries/99aae243-ad6e-401b-89f9-90a51def6a18/?language=de-DE&linkDepth=1
```

## Response messages
| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Entry](/model/entry.md) |
| 404 | Entry not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

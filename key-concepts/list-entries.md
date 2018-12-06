# Get a list of all entries

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/entries

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| versionStatus | query | string | | The status of the entry, either *published* or *latest*. The default is *published* |
| linkDepth | query | number | integer | The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |
| pageIndex | query | number | integer | The index of the result set to return |
| pageSize | query | number | integer | The number of items to return in the result set. The default is 25 |
| order | query | string | | A comma-separated list of [field](/model/content-type.md#field) ids to order the results by. Descending order is specified using a prefixed '-' |
| fields | query | string | | A comma-separated [list](/key-concepts/fields-list.md) of [field](/model/content-type.md#field) ids to restrict the fields returned for an entry |
| language | query | string | [Language code](/localization.md) | The language variation to return for each entry |

## Response messages

| HTTP status code | Reason | Response model|
|:-|:-|:-|
| 200 | Success |[Paged list](/model/paged-list.md) of [Entry](/model/entry.md) items |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

## Example requests

### List all entries - actors, movies, directors, etc.

```http
GET: /api/delivery/projects/movieDb/entries/
```

### List all entries translated to German

```http
GET: /api/delivery/projects/movieDb/entries/?language=de
```

### List all entries translated to German and ordered by published date descending

```http
GET: /api/delivery/projects/movieDb/entries/?language=de&order=-sys.published
```

### List all entries with their direct child entries, assets and images resolved

```http
GET: /api/delivery/projects/movieDb/entries/?linkDepth=1
```

**List the latest version of all entries**

```http
GET: /api/delivery/projects/movieDb/entries/?versionStatus=latest
```

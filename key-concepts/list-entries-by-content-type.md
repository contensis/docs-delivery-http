# Get a list entries by content type

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/contenttypes/**{contentTypeId}**/entries

## Parameters

| Name | Parameter type|Type|Format|Description|
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| contentTypeId | path |string | | The content type identifier |
| versionStatus | query | string | | The status of the entry, either *published* or *latest*. The default is *published* |
| linkDepth | query | number | integer | The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |
| pageIndex | query | number | integer | The index of the result set to return |
| pageSize | query | number | integer | The number of items to return in the result set. The default is 25 |
| order | query | string | | A comma-separated list of [field](/model/content-type.md#field) ids to order the results by. Descending order is specified using a prefixed '-' |
| fields | query | string | | A comma-separated list of [field](/model/content-type.md#field) ids to restrict the fields returned for an entry |
| language | query | string | [Language code](/localization.md) | The language variation to return for each entry |

## Response messages

| HTTP status code | Reason | Response model|
|:-|:-|:-|
| 200 | Success | [Paged list](/model/paged-list.md) of [Entry](/model/entry.md) items |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

## Example requests

### List of all movie entries

```http
GET: /api/delivery/projects/movieDb/contentTypes/movies/entries/
```

### List of all movie entries translated to German

```http
GET: /api/delivery/projects/movieDb/contentTypes/movies/entries?language=de
```

### List of all movie entries translated to German and ordered by release date descending

```http
GET: /api/delivery/projects/movieDb/contentTypes/movies/entries?language=de&order=-releaseDate
```

### List of all movie entries with their direct child entries, assets and images resolved

```http
GET: /api/delivery/projects/movieDb/contentTypes/movies/entries?linkDepth=1
```

**List the latest version of all movies**

```http
GET: /api/delivery/projects/movieDb/contentTypes/movies/entries?versionStatus=latest
```

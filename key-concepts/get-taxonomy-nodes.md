# Get taxonomy nodes
<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/taxonomy/nodes

## Get taxonomy nodes by path

```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes?path=root/movies/genres
```
 
## Parameters
| Name | Parameter Type | Type | Format | Description |
| :------- | :--------- |  :--- | :----- | :--------- |
| projectId | path | string | | The project identifier |
| path | query | string |  | The taxonomy path |
| language | query | string | [Language code](/localization.md) | [Optional] The language of the taxonomy name to retrieve. Defaults to the project default |
| childDepth | query | number | int | [Optional] The maximum depth to which child nodes should be returned |
| order | query |  string | | [Optional] How to order the child nodes. Defaults to the creation order, otherwise specify "alphabetical" |

## Example request
```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes?path=root/movies/genres/thriller&language=en-GB&childDepth=2&order=alphabetical
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | A [Taxonomy Node](/model/taxonomy-node.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Project does not support the specified language | [Error](/key-concepts/errors.md) |
| 404 | Taxonomy path does not exist | [Error](/key-concepts/errors.md) |


## Get taxonomy nodes by key

```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes/0/1/2
```

## Parameters
| Name | Parameter Type | Type | Format | Description |
| :------- | :-------|  :--- | :----- | :------------ |
| projectId | path | string | | The project identifier |
| key | path | string |  | The taxonomy key |
| language | query | string | [Language code](/localization.md) | [Optional] The language of the taxonomy name to retrieve. Defaults to the project default |
| childDepth | query | number | int | [Optional] The maximum depth to which child nodes should be returned |
| order | query |  string | | [Optional] How to order the child nodes. Defaults to the creation order, otherwise specify "alphabetical" |


## Example request
```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes/0/1/2?language=en-GB&childDepth=2&order=alphabetical
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | A [Taxonomy Node](/model/taxonomy-node.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Project does not support the specified language | [Error](/key-concepts/errors.md) |
| 404 | Taxonomy key does not exist | [Error](/key-concepts/errors.md) |

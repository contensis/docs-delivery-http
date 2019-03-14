---
description: A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. 
---
# Search

A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

* [Queries](#queries)
* [Location searches](#location-searches)
* [Sub-queries](#sub-queries)
* [Ordering](#ordering)
* [Paging](#paging)
* [Weighting](#weighting)
* [Specifying fields](#specifying-fields)
* [Complete example](#complete-example)

## Queries

This example demonstrates a simple search.

```json
POST: /api/delivery/projects/{projectId}/entries/search

{
    "where": [
        {
            "field": "title",
            "contains": "Batman"
        },
        {
            "field": "runtime",
            "greaterThan": 200
        }
    ]
}
```

## Location searches

Search for locations within a radius of a specified location.

### Supported distance units

| Unit          | Search value                   |
|---------------|--------------------------------|
| Mile          | `mi` or `miles`                |
| Yard          | `yd` or `yards`                |
| Feet          | `ft` or `feet`                 |
| Inch          | `in` or `inch`                 |
| Kilometer     | `km` or `kilometers`           |
| Meter         | `m` or `meters`                |
| Centimeter    | `cm` or `centimeters`          |
| Millimeter    | `mm` or `millimeters`          |
| Nautical mile | `NM`, `nmi` or `nauticalmiles` |

### Example

Find all entries which have a location within 10.5 miles of Ludlow Castle's location.
Append the search value at the end of the distance specified, so for example "10.5mi" or "10.5miles".

```json
{
    "where": [{
        "field": "location",
        "distanceWithin": {
            "lat": "52.36700505",
            "lon": "-2.72304296",
            "distance": "10.5mi"
        }
    }]
}
```

## Sub-queries

A sub-query is a query within another query that is used as a condition to further restrict the results. Effectively they are defined by an explicit nesting of [logical operators](query-operators.md#logical-operators).

This example demonstrates a simple search with a sub-query:

```json
{
    "where": [
        {
            "field": "title",
            "contains": "Batman"
        },
        {
            "or": [
                {
                    "field": "releaseDate",
                    "greaterThan": 1960
                },
                {
                    "field": "tagline",
                    "contains": "gotham"
                }
            ]
        }
    ]
}
```

## Ordering

Results can be ordered by one or more fields in an ascending or descending direction. Order clauses are prioritised in the order that they are added. By default, if no order clauses are specified then the entry results are ordered by the EntryTitle in an ascending direction.

### Ascending order

Order by *releaseDate* in an ascending direction.

```json
{
    "orderBy": [{
        "asc": "releaseDate"
    }],
}
```

### Descending order

Order by *releaseDate* in a descending direction.

```json
{
    "orderBy": [{
        "desc": "releaseDate"
    }],
}
```

## Paging

Paging allows the number of results to be restricted to a defined count so that the results are easier to handle and ensures a response is returned quickly.

The page number can also be specified to allow which set of results is to be returned. The page size is limited to a maximum of 10,000 however this is not recommended.

```json
{
    "pageSize": 50,
    "pageIndex": 1
}
```

## Weighting

[comment]: <> (TODO: This needs fleshing out)

## Specifying fields

### System fields

System fields such as id, contentTypeId, projectId, versionNo etc. are under the *sys* object and can be accessed using a dot notation, e.g. sys.id, sys.contentTypeId, sys.projectId, sys.version.versionNo.

The *entryTitle* and *entryDescription* fields are dynamic values, determined by the *EntryTitleField* and *EntryDescriptionField* values in the content type.

### Data fields

Fields defined in the content type for the entry can be accessed by their API id.

### All fields

All fields can be searched by specifying an asterisk (*) in the field id. Note there are some limitations, and the FreeText operator is not supported for all fields.

#### Example

```json
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "*",
            "equalTo": "Interstellar"
        }
    ]
}
```

### Array fields

Searching on array fields require square brackets [] to be specified in the field id before any field ids within the object. Note that this syntax is not required for single object fields. All operators support searching across array fields.

#### Example array field search

This example searches for a quote source of "Bruce Willis" within a quote array field called movieQuote.

```json
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "movieQuote[].source",
            "equalTo": "Bruce Willis"
        }
    ]
}
```

## Complete example

The following example combines the ordering, paging and weighting concepts.

```json
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "title",
            "contains": "Batman",
            "weight": 100
        },
        {
            "field": "synopsis",
            "freeText": "gotham",
            "weight": 30
        },
        {
            "field": "runtime",
            "greaterThan": 200
        }
    ],
    "orderBy": [
        {
            "desc": "releaseDate"
        }
    ],
    "pageIndex": 1,
    "pageSize": 50
}
```

## Specifying fields to return

The fields returned in the results can be specified using a "fields" clause:

```json
{
    "fields": [
        "title",
        "synopsis",
        "actors",
        "name",
        "dateOfBirth",
        "bio"
    ]
}
```

If no fields are specified then all the data fields and system fields for an entry will be returned.

### Data fields

Fields defined in the content type for the entry can be specified by their API id.

### System fields

If *sys* is included in the list of fields, then all system fields will be returned for the entry.

If *sys* is not included in the list of fields, then the following system fields wil be returned:

* id
* dataFormat
* language

Additional system fields can be specified to be returned by being prefixed with *sys.*, e.g.

```json
{
    "fields": [
        "sys.uri",
        "sys.contentTypeId"
    ]
}
```

The optional system fields that can be specified are:

* uri
* baseUris
* projectId
* contentTypeId
* metadata
* properties
* version
* owner

It is not possible to specify individual fields within the *properties* and *metadata* fields.

If the *entryTitle* field is included then this field will be returned, for example:

```json
{
    "fields": [
        "sys.uri",
        "sys.contentTypeId",
        "entryTitle"
    ]
}

If the *entryDescription* field is included then this field will be returned, for example:

```json
{
    "fields": [
        "sys.uri",
        "sys.contentTypeId",
        "entryTitle",
        "entryDescription"
    ]
}

```
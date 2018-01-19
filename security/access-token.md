---
description: Access to resources in the Delivery API requires that an accessToken value is provided with each request to the services.
---
# Access token

Access to resources in the Delivery API requires that an *accessToken* value is provided with each request to the services. The *accessToken* can be set as either a HTTP header value or as a querystring parameter.

The *accessToken* can be obtained from the Contensis global settings screen from a setting called *DeliveryAPI_AccessToken*. This value is generated uniquely for each installation of Contensis.

## Querystring example

```http
GET: /api/delivery/projects/website/contenttypes/movies/?accessToken=kJpUHbj3HEO8u7mTzEgIqI5gVN1K5Y8DUZSPwmSMOzzDl7dB
```

## Header example

```http
GET: /api/delivery/projects/website/contenttypes/movies/
Content-Type: application/json
Accept: application/json
accessToken: kJpUHbj3HEO8u7mTzEgIqI5gVN1K5Y8DUZSPwmSMOzzDl7dB
```

## Authorization claims

The Delivery API is limited to the following authorization claims which restricts resource access to read-only.

* Project_read
* ContentType_read
* Entry_read

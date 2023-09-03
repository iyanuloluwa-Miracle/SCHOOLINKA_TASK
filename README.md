# Blog API Documentation

## Introduction

Welcome to the Blog API documentation. This API allows you to manage and interact with blog posts. You can perform operations such as creating, retrieving, updating, and deleting blog posts. Additionally, the API supports pagination and search functionality.

## Base URL

The base URL for accessing the Blog API is `http://localhost:4000/api/v1/blog`. Ensure that you have the API server running and listening on the specified port.

## API Endpoints.

### 1. Get All Blog Posts.

* Endpoint: `/`
* HTTP Method: GET
* Description: Retrieve a list of all blog posts.

Request Parameters

* None
  
Response

* Status Code: 200 (OK)
* Response Format: JSON

```json
{
  "status": "Ok!",
  "message": "Successfully fetched all blog posts!",
  "data": "[list_of_blog_posts]"
}
```

### 2. Get a Specific Blog Post

* Endpoint: `/:id`
* HTTP Method: GET
* Description: Retrieve a specific blog post by its ID.

Request Parameters

* `id` (URL parameter): The ID of the blog post to retrieve.
  
Response

* Status Code: 200 (OK)
* Response Format: JSON
```json
{
  "status": "Ok!",
  "message": "Successfully fetched blog post by ID!",
  "data": {
    "id": 1,
    "title": "Sample Blog Post",
    "content": "This is the content of the blog post.",
    "author": "John Doe",
    "createdAt": "2023-09-01T12:00:00Z"
  }
}
```


### 3.Create a New Blog Post

* Endpoint: `/`
* HTTP Method: POST
* Description:  Create a new blog post.


Request Body:

```json
{
  "title": "New Blog Post",
  "content": "This is the content of the new blog post.",
  "author": "Jane Smith"
}
```

Response:

* Status Code: 201 (Created)
* Response Format: JSON
  
```json
{
  "status": "Created!",
  "message": "Successfully created a new blog post!"
}
```

### 4.Update a Blog Post

* Endpoint: `/:id`
* HTTP Method: PATCH
* Description: Update an existing blog post..

Request Parameters

* `id` (URL parameter): The ID of the blog post to retrieve.
  
Request Body:

```json
{
  "title": "Updated Blog Post Title",
  "content": "Updated content goes here.",
  "author": "Updated Author"
}

```

Response:

* Status Code: 201 (Created)
* Response Format: JSON
  
```json
{
  "status": "Ok!",
  "message": "Successfully updated the blog post!"
}

```

### 5.Delete a Blog Post

* Endpoint: `/:id`
* HTTP Method: DELETE
* Description: Delete a specific blog post by its ID.

Request Parameters

* `id` (URL parameter): The ID of the blog post to delete.
  
Response

* Status Code: 200 (OK)
* Response Format: JSON

```json
{
  "status": "Ok!",
  "message": "Successfully deleted the blog post!"
}

```


### 6.Paginated Blog Posts with Search

* Endpoint: `/paginated`
* HTTP Method: GET
* Description: Retrieve paginated blog posts with optional search functionality.

Request Parameters

* `page` (Query parameter, optional): Page number (default is 1).
* `search` (Query parameter, optional): Search query to filter blog posts (default is empty).

  
Response

* Status Code: 200 (OK)
* Response Format: JSON

```json
{
  "status": "Ok!",
  "message": "Successfully fetched paginated blog posts!",
  "data": "[list_of_paginated_blog_posts]",
  "total": "total_number_of_blog_posts"
}

```

### Error Handling

In case of errors, the API will return appropriate HTTP status codes and error messages in the response body to help identify and resolve issues.

* Status Code: 400 (Bad Request) - Invalid request parameters or data.
* Status Code: 404 (Not Found) - Resource not found.
* Status Code: 500 (Internal Server Error) - Server-related issues.

### Conclusion

This documentation provides an overview of the Blog API's endpoints, request parameters, and response formats. You can use these endpoints to manage blog posts in your application. 
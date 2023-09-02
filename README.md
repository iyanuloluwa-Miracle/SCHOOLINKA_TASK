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
  "data": [list_of_blog_posts]
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
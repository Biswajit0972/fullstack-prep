## **Introduction to the HTTP Protocol and its Role in Web Communication.**

###### A good backend server must be using these conditions.

- Http methods (GET, POST, PUT, DELETE)
- Http status codes (200, 404, 500)
- Http headers
- Http body
- GET: Retrieve data
- POST: Create data
- PUT: Update data
- DELETE: Delete data

Http Status Codes:
200: OK

201: Created

301: Moved Permanently

400: Bad Request

401: Unauthorized

403: Forbidden

405: Method Not Allowed

404: Not Found

500: Internal Server Error

---
**1xx: Informational response**

**2xx: Success**

**3xx: Redirection**

**4xx: Client error**

**5xx: Server error**

---

PORT

PORT is a number that identifies a specific computer on the network. It is used to identify the computer running a particular service.

----
HTTP REQUEST:
Is the way Internet communications platforms such as web browsers ask for the information they need to load a website.

**What are HTTP request headers?**

HTTP headers contain text information stored in key-value pairs, and they are included in every HTTP request (and response, more on that later). These headers communicate core information, such as what browser the client is using and what data is being requested.


***

## **1. URL Structure**
A URL (Uniform Resource Locator) usually follows this format:

```
scheme://domain:port/path?query#fragment
```

Where:
- **scheme** → protocol (e.g., `http`, `https`, `ftp`)
- **domain** → website address (e.g., `example.com`)
- **port** → optional, defines connection port (e.g., `:80`, `:443`)
- **path** → specific resource location (e.g., `/products/shoes`)
- **query** → parameters after `?` (e.g., `?color=red&size=10`)
- **fragment** → anchor to a section in the page (`#reviews`)

***

## **2. Example URL**
```
https://www.example.com:443/shop/products?category=shoes&color=red#reviews
```

**Breakdown:**
- **Protocol (scheme):** `https` → secure web connection
- **Domain:** `www.example.com` → website name
- **Port:** `443` → default for HTTPS (can be omitted)
- **Path:** `/shop/products` → page location in the site
- **Query:** `category=shoes&color=red` → filters for products
- **Fragment:** `#reviews` → jumps to the reviews section

***

**Simpler example:**
```
https://example.com/contact
```
This URL:
- Uses HTTPS protocol
- Goes to the `contact` page on `example.com`

***


***

### 🔑 What is **Authentication**?
- **Definition**: Authentication is the process of **verifying the identity of a user, system, or device**.
- **Purpose**: Answering the question — *"Who are you?"*
- **Examples**:
    - Username & Password
    - OTP via SMS/email
    - Biometrics (fingerprint, Face ID)
    - OAuth login (Google, GitHub, etc.)

***

### 🔒 What is **Authorization**?
- **Definition**: Authorization is the process of **determining what an authenticated user is allowed to do**.
- **Purpose**: Answering the question — *"What can you access?"*
- **Examples**:
    - Admin can manage all users, but a normal user can only view their profile.
    - An instructor can create/update courses, but a student can only view/join them.

🔑 **Key difference**:  
👉 **Authentication = identity verification**  
👉 **Authorization = access control**

***

### 🔐 What is a **Session**?
A session is a way to persist user state across multiple requests (since HTTP is stateless).  
It makes sure that once a user logs in, they don’t need to re-enter credentials on every request.

***

#### 📌 Types of Sessions

1. **Stateless Session (Token-Based, e.g. JWT)**
    - **How it works**:
        - Server issues a **signed token (JWT)** after login.
        - Client stores it (usually in localStorage or cookies) and sends it with each request.
        - Server **does not keep user state**; instead, it **verifies the token** on every request.
    - ✅ Pros: Scalable, no server-side session storage, good for microservices, mobile apps.
    - ❌ Cons: Harder to revoke tokens early (until they expire).
    - **Use case**: Long-term login persistence (e.g. "Remember me" feature).

***

2. **Stateful Session (Server-Side Session)**
    - **How it works**:
        - After login, the server creates a session stored in memory/DB/cache.
        - The client gets a **session ID (cookie)** that references this data.
        - On every request, server uses the session ID to fetch the user’s session.
    - ✅ Pros: Easy to revoke or expire sessions, simple security handling.
    - ❌ Cons: Less scalable (server stores session state, needs load balancing with sticky sessions).
    - **Use case**: Traditional web apps, secure enterprise apps.

***

### 📊 Simple Comparison: JWT vs Session

| Feature          | Stateless (JWT)       | Stateful (Sessions) |
|------------------|-----------------------|---------------------|
| Storage          | Client-side (token)   | Server-side (session store) |
| Scalability      | High (no server state) | Low (server stores sessions) |
| Revocation       | Hard (token valid till expiry) | Easy (delete session) |
| Use Case         | APIs, Mobile apps, SSO | Traditional web apps |

***

✅ **In short:**
- **Authentication** = Verify *who* you are.
- **Authorization** = Decide *what* you can do.
- **Session** = Persist login state across HTTP requests (via JWT = stateless, via session ID = stateful).

***

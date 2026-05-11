# Multi-tenancy

Multi-tenancy means a single application serves multiple customers (tenants), while keeping each tenant’s data isolated and private. Just like apartments in a building share infrastructure (electricity, water, elevators) but maintain private spaces, tenants in a software system share the application but have separate data. The video explores two main approaches to implementing multi-tenancy:

1. **Separate databases per tenant** – strong isolation but harder to scale.
2. **Shared database with tenant IDs (row-level isolation)** – easier to scale but requires careful query handling to avoid data leaks.

Both approaches have trade-offs, and the choice depends on business needs.

## Highlights

0:02 **Introduction to Multi-tenancy**

- Defined as serving multiple customers with isolated data.
- Important for modern apps and interviews.

1:00 **Apartment Building Analogy**

- Building = application, apartments = tenants.
- Shared infrastructure (water, electricity, lift).
- Private spaces represent isolated customer data.

5:00 **Real-world Example: Shopify**

- Multiple businesses use Shopify via subscription.
- Each business has its own customers and data.
- Businesses cannot access each other’s data.

10:00 **Problem with Separate Deployments**

- Copying app + database for each business works initially.
- Becomes complex and resource-heavy at scale.
- Leads to inefficiency and maintenance issues.

14:00 **Shared Database Approach**

- One application, one database.
- Tenant IDs used to separate customer records.
- Easier scaling but requires careful query filtering.

19:00 **Trade-offs & Conclusion**

- Separate DBs = strong isolation, harder scaling.
- Shared DB = easier scaling, risk of data leaks if queries aren’t careful.
- Both approaches are valid depending on use case.

👉 The takeaway: **Multi-tenancy is about balancing isolation and scalability.** It’s a foundational concept for SaaS platforms like Shopify, Notion, and GitHub Organizations.

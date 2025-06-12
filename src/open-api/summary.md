# Generating TypeScript Models

This spike evaluates tools for generating TypeScript models from an OpenAPI specification and also generating zod/yup schemas.

## 1. Generating Types from OpenAPI.yaml File

### openapi-typescript-codegen

**Pros:**
- Easily configurable and easy to set up
- Allows generating only specific parts (e.g., models, excluding API client)
- Outputs each model into separate files, improving modularity
- Supports flexible output structure and naming

**Location:**
- src/open-api/codegen
- src/open-api/codegen-only-models

**Verdict:**
This tool provides the cleanest and most maintainable output it looks same as we already have in types folder. Best from my point of view.

### openapi-typescript

**Pros:**
- Simple CLI usage

**Cons:**
- Generates a single file with all models
- Nested types and lack of separation make it harder to maintain

**Location:**
- src/typescript/types.ts

**Verdict:**
Although functional, it's less suitable for me don't know how to get rid off the unused parts but it should be doable with some workaround.

## 2. Generating Zod/Yup Schemas

### Tool 1: openapi-zod-client

**Pros:**
- Generates Zod schemas directly from the OpenAPI file
- Schema output is mostly accurate and consistent
- Can be configured to exclude the API client generation

**Cons:**
- Outputs all schemas into a single file, which can be hard to maintain
- Includes some extra client-related code or helpers that may not be needed
- Requires post-processing or manual adjustment to exclude unwanted parts

**Verdict:**
Good choice if we want to keep things simple and centralized. With some cleanup or wrapping, it could serve our needs.

**Location:**
- src/zod-openapi

### Tool 2: ts-to-zod

**Pros:**
- Converts existing TypeScript types/interfaces into Zod schemas
- Generates clean and separated schemas

**Cons:**
- Works well on individual files, but struggles with those who has dependencies
- Doesn't support recursive folder input directly — needs custom scripting to automate for multiple files with internal dependencies
- Try to write some easy parser but it shows time-consuming and not so easy

**Verdict:**
Ideal if we want use it for only some of types and not do it automatically for all of them

**Location:**
- src/ts-to-zod/booking easy one
- src/ts-to-zod/availability harder one

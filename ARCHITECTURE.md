# System Architecture

## Overview

SkillForge follows a modern full-stack architecture built on Next.js 14 with the App Router, providing server-side rendering, API routes, and a React-based frontend.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Browser    │  │   Mobile     │  │   Tablet     │          │
│  │   (Desktop)  │  │   (Phone)    │  │   (iPad)     │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                  │                   │
│         └─────────────────┴──────────────────┘                   │
│                           │                                       │
└───────────────────────────┼───────────────────────────────────────┘
                            │
                            │ HTTPS
                            │
┌───────────────────────────▼───────────────────────────────────────┐
│                    PRESENTATION LAYER                              │
│                      (Next.js App)                                 │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    React Components                         │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │
│  │  │  Pages   │  │Components│  │  Hooks   │  │ Contexts │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │  │
│  │                                                             │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │              Client-Side Features                     │ │  │
│  │  │  • Monaco Editor (Code Execution)                     │ │  │
│  │  │  • Quiz Engine (Validation)                           │ │  │
│  │  │  • Progress Tracking (UI)                             │ │  │
│  │  │  • Navigation & Routing                               │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                 Server-Side Rendering                       │  │
│  │  • Initial page load                                        │  │
│  │  • SEO optimization                                         │  │
│  │  • Data fetching                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                      APPLICATION LAYER                              │
│                     (Next.js API Routes)                            │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                      API Endpoints                          │  │
│  │                                                             │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │ /api/auth   │  │/api/courses │  │ /api/users  │       │  │
│  │  │  • register │  │  • enroll   │  │  • profile  │       │  │
│  │  │  • signin   │  │  • progress │  │  • settings │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  │                                                             │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │/api/lessons │  │ /api/quiz   │  │/api/exercise│       │  │
│  │  │  • complete │  │  • submit   │  │  • validate │       │  │
│  │  │  • progress │  │  • results  │  │  • run      │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    Middleware Layer                         │  │
│  │  • Authentication (NextAuth.js)                             │  │
│  │  • Authorization (Role-based)                               │  │
│  │  • Validation (Zod)                                         │  │
│  │  • Error Handling                                           │  │
│  └────────────────────────────────────────────────────────────┘  │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                       DATA ACCESS LAYER                             │
│                        (Prisma ORM)                                 │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    Prisma Client                            │  │
│  │                                                             │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │  │
│  │  │   Models     │  │   Queries    │  │  Relations   │    │  │
│  │  │              │  │              │  │              │    │  │
│  │  │ • User       │  │ • findMany   │  │ • Includes   │    │  │
│  │  │ • Course     │  │ • create     │  │ • Joins      │    │  │
│  │  │ • Lesson     │  │ • update     │  │ • Nested     │    │  │
│  │  │ • Quiz       │  │ • delete     │  │              │    │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘    │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    Type Safety                              │  │
│  │  • Auto-generated TypeScript types                          │  │
│  │  • Compile-time validation                                  │  │
│  │  • IntelliSense support                                     │  │
│  └────────────────────────────────────────────────────────────┘  │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                       DATABASE LAYER                                │
│                    (SQLite / PostgreSQL)                            │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                       Tables                                │  │
│  │                                                             │  │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐          │  │
│  │  │  User  │  │ Course │  │ Lesson │  │Exercise│          │  │
│  │  ├────────┤  ├────────┤  ├────────┤  ├────────┤          │  │
│  │  │ id     │  │ id     │  │ id     │  │ id     │          │  │
│  │  │ email  │  │ title  │  │ title  │  │ title  │          │  │
│  │  │ name   │  │ desc   │  │ content│  │ code   │          │  │
│  │  │ pass   │  │ level  │  │ type   │  │ tests  │          │  │
│  │  └────────┘  └────────┘  └────────┘  └────────┘          │  │
│  │                                                             │  │
│  │  ┌────────┐  ┌──────────┐  ┌────────────┐  ┌──────────┐  │  │
│  │  │  Quiz  │  │ Question │  │ Enrollment │  │ Progress │  │  │
│  │  └────────┘  └──────────┘  └────────────┘  └──────────┘  │  │
│  └────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
app/
├── (auth)/              # Authentication routes
│   ├── signin/         # Sign in page
│   └── signup/         # Sign up page
├── courses/            # Course routes
│   ├── [id]/          # Course detail
│   │   └── lessons/   # Lesson routes
│   │       └── [lessonId]/  # Lesson viewer
│   └── page.tsx       # Course catalog
├── dashboard/          # User dashboard
├── api/               # API routes
│   ├── auth/          # Auth endpoints
│   ├── enrollments/   # Enrollment endpoints
│   ├── lessons/       # Lesson endpoints
│   └── quiz-attempts/ # Quiz endpoints
└── page.tsx           # Landing page

components/
├── CourseCard.tsx      # Course display
├── EnrollButton.tsx    # Enrollment
├── ExerciseView.tsx    # Code editor
├── LessonContent.tsx   # Tutorial display
├── LessonList.tsx      # Lesson listing
├── Navigation.tsx      # Main nav
├── QuizView.tsx        # Quiz interface
└── Providers.tsx       # Context providers
```

## Data Flow

### 1. User Authentication Flow

```
User Input → Sign In Form → API Route (/api/auth)
    ↓
NextAuth.js validates credentials
    ↓
Prisma queries User table
    ↓
bcryptjs compares passwords
    ↓
JWT token generated
    ↓
Session created and stored
    ↓
User redirected to Dashboard
```

### 2. Course Enrollment Flow

```
User clicks "Enroll" → EnrollButton Component
    ↓
POST /api/enrollments
    ↓
Check authentication (middleware)
    ↓
Verify not already enrolled
    ↓
Create Enrollment record (Prisma)
    ↓
Update UI with enrollment status
    ↓
User can access lessons
```

### 3. Lesson Completion Flow

```
User completes lesson → Mark Complete Button
    ↓
POST /api/lessons/[id]/complete
    ↓
Create/Update LessonProgress record
    ↓
Calculate course progress percentage
    ↓
Update Enrollment progress
    ↓
Return updated progress to client
    ↓
UI shows completion status
```

### 4. Exercise Validation Flow

```
User writes code → Monaco Editor
    ↓
User clicks "Run Tests" → ExerciseView Component
    ↓
Client-side code execution (eval/Function)
    ↓
Run against test cases (JSON)
    ↓
Compare output with expected results
    ↓
Display pass/fail for each test
    ↓
If all pass → Mark lesson complete
```

### 5. Quiz Submission Flow

```
User answers questions → QuizView Component
    ↓
User clicks "Submit" → Validate all answered
    ↓
Calculate score (client-side)
    ↓
POST /api/quiz-attempts
    ↓
Save attempt to database
    ↓
Display results with explanations
    ↓
If score >= 70% → Mark lesson complete
```

## Security Architecture

### Authentication & Authorization

```
┌────────────────────────────────────────────────┐
│          Security Layers                       │
│                                                │
│  1. HTTPS (Transport Layer Security)          │
│     ↓                                          │
│  2. NextAuth.js (Session Management)          │
│     ↓                                          │
│  3. JWT Tokens (Stateless Auth)               │
│     ↓                                          │
│  4. bcryptjs (Password Hashing)               │
│     ↓                                          │
│  5. Prisma (SQL Injection Prevention)         │
│     ↓                                          │
│  6. React (XSS Prevention)                    │
│     ↓                                          │
│  7. Environment Variables (Secret Management) │
└────────────────────────────────────────────────┘
```

### Protected Routes

```
User Request → Route Handler
    ↓
Check session (getServerSession)
    ↓
┌─── Authenticated? ───┐
│  Yes          No     │
│   ↓            ↓     │
│ Allow      Redirect  │
│ Access     to Login  │
└──────────────────────┘
```

## State Management

### Server State
- Managed by Next.js App Router
- Server components fetch data
- Automatic revalidation
- Cached at CDN edge

### Client State
- React hooks (useState, useEffect)
- NextAuth session (useSession)
- Form state (controlled components)
- UI state (modals, dropdowns)

### Database State
- Single source of truth
- Prisma manages connections
- Transactions for consistency
- Optimistic updates ready

## Performance Optimizations

### 1. Server-Side Rendering
```
Request → Next.js Server → Render React → HTML Response
                              ↓
                        Database Query
                              ↓
                        Props to Components
```

### 2. Code Splitting
```
Route-based splitting:
/courses → courses.chunk.js
/dashboard → dashboard.chunk.js
/lessons → lessons.chunk.js
```

### 3. Database Optimization
```
• Indexes on frequently queried fields
• Relation preloading (include)
• Pagination for large datasets
• Connection pooling
```

## Deployment Architecture

### Development
```
localhost:3000 → Next.js Dev Server
                    ↓
                SQLite Database
```

### Production
```
                 ┌──────────────┐
                 │   Vercel     │
User → CDN →     │   Next.js    │
                 │   Hosting    │
                 └──────┬───────┘
                        │
                        ↓
                 ┌──────────────┐
                 │  PostgreSQL  │
                 │   Database   │
                 └──────────────┘
```

## Scalability Considerations

### Horizontal Scaling
- Serverless functions auto-scale
- Stateless architecture
- CDN distribution
- Database connection pooling

### Vertical Scaling
- Upgrade database instance
- Increase memory allocation
- Optimize queries
- Add read replicas

### Caching Strategy
```
Layer 1: Browser Cache (Static assets)
Layer 2: CDN Cache (Pages, API responses)
Layer 3: Application Cache (Database queries)
Layer 4: Database Cache (Query results)
```

## Monitoring & Logging

### Metrics to Track
- API response times
- Database query performance
- User engagement (course completion)
- Error rates
- Authentication failures
- Quiz scores distribution

### Logging Structure
```
Error Logs → Console/File
    ↓
User Actions → Analytics
    ↓
Performance → Metrics Dashboard
    ↓
Security Events → Audit Log
```

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 | UI components |
| Framework | Next.js 14 | Full-stack framework |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first CSS |
| Database | Prisma + SQLite/PostgreSQL | Data persistence |
| Auth | NextAuth.js | Authentication |
| Editor | Monaco Editor | Code exercises |
| Icons | Lucide React | UI icons |
| Validation | Zod | Schema validation |

## Future Architecture Enhancements

1. **Microservices**: Split into services (Auth, Content, Analytics)
2. **Message Queue**: Add Redis for background jobs
3. **CDN**: Implement CloudFront/Cloudflare
4. **Search**: Add Elasticsearch for course search
5. **Real-time**: WebSocket for live collaboration
6. **Caching**: Redis for session and query caching
7. **Monitoring**: Sentry, DataDog, or New Relic
8. **CI/CD**: GitHub Actions for automated deployment

This architecture provides a solid foundation that can scale from hundreds to millions of users with appropriate infrastructure adjustments.

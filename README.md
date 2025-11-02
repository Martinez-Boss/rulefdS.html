# SkillForge - Interactive Learning Platform

A modern, full-stack web application built with Next.js that enables users to learn new skills through interactive tutorials, hands-on coding exercises, and quizzes with instant feedback.

## Features

- **Interactive Tutorials**: Step-by-step lessons with syntax-highlighted code examples
- **Live Code Editor**: Practice coding directly in the browser using Monaco Editor
- **Quiz System**: Multiple choice and true/false questions with instant feedback
- **Progress Tracking**: Monitor learning progress with a personalized dashboard
- **Course Management**: Browse and enroll in courses across multiple categories
- **User Authentication**: Secure authentication with NextAuth.js
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Feedback**: Instant validation for coding exercises and quizzes

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - VS Code's editor for code exercises
- **React Markdown** - Render markdown content
- **Lucide React** - Beautiful icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Modern database ORM
- **SQLite** - Database (can be easily swapped for PostgreSQL/MySQL)
- **NextAuth.js** - Authentication solution
- **bcryptjs** - Password hashing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-learning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and update the following:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

To generate a secure `NEXTAUTH_SECRET`, run:
```bash
openssl rand -base64 32
```

4. Set up the database:
```bash
npm run db:push
```

5. Seed the database with sample courses:
```bash
npm run db:seed
```

6. Start the development server:
```bash
npm run dev
```

7. Open your browser and navigate to:
```
http://localhost:3000
```

## Demo Account

After seeding the database, you can log in with:
- **Email**: demo@example.com
- **Password**: password123

## Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── api/                   # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   ├── enrollments/      # Course enrollment
│   │   ├── lessons/          # Lesson progress
│   │   └── quiz-attempts/    # Quiz submissions
│   ├── auth/                 # Authentication pages
│   ├── courses/              # Course pages
│   ├── dashboard/            # User dashboard
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/               # React components
│   ├── CourseCard.tsx       # Course display card
│   ├── EnrollButton.tsx     # Course enrollment
│   ├── ExerciseView.tsx     # Code exercise interface
│   ├── LessonContent.tsx    # Tutorial content
│   ├── LessonList.tsx       # Course lesson list
│   ├── LessonNavigation.tsx # Lesson navigation
│   ├── Navigation.tsx       # Main navigation bar
│   ├── Providers.tsx        # Context providers
│   └── QuizView.tsx         # Quiz interface
├── lib/                      # Utility libraries
│   ├── auth.ts              # NextAuth configuration
│   ├── prisma.ts            # Prisma client
│   └── utils.ts             # Helper functions
├── prisma/                   # Database
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Seed data
├── .env.example             # Environment variables template
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Database Schema

The application uses the following main models:

- **User**: User accounts with authentication
- **Course**: Learning courses with metadata
- **Lesson**: Individual lessons within courses
- **Exercise**: Coding exercises with test cases
- **Quiz**: Quizzes with questions
- **Question**: Individual quiz questions
- **Enrollment**: User course enrollments
- **LessonProgress**: Track lesson completion
- **QuizAttempt**: Store quiz results

## Key Features Explained

### 1. Interactive Code Editor

The code editor uses Monaco Editor (the same editor powering VS Code) to provide:
- Syntax highlighting
- Auto-completion
- Multiple language support (JavaScript, Python, etc.)
- Test case validation
- Solution hints

### 2. Quiz System

Quizzes support multiple question types:
- Multiple choice questions
- True/False questions
- Code-based questions
- Instant feedback with explanations
- Score tracking (70% required to pass)

### 3. Progress Tracking

Users can track their progress through:
- Course completion percentage
- Lesson completion status
- Quiz scores history
- Achievement badges
- Personalized dashboard

### 4. Authentication

Secure authentication using:
- Email/password credentials
- JWT session management
- Protected routes
- Server-side session validation

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Enrollments
- `POST /api/enrollments` - Enroll in a course

### Lessons
- `POST /api/lessons/[lessonId]/complete` - Mark lesson complete
- `GET /api/lessons/[lessonId]/progress` - Get lesson progress

### Quizzes
- `POST /api/quiz-attempts` - Submit quiz attempt

## Customization

### Adding New Courses

You can add new courses by either:

1. **Using the seed script**: Edit `prisma/seed.ts` and add your course data
2. **Direct database access**: Use Prisma Studio
```bash
npx prisma studio
```

### Styling

The application uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component styles using Tailwind utility classes

### Adding New Question Types

To add new question types to quizzes:
1. Update the database schema in `prisma/schema.prisma`
2. Modify `components/QuizView.tsx` to handle the new type
3. Update the seed data if needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

For production, consider using PostgreSQL instead of SQLite:
```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Database Management

Push schema changes:
```bash
npm run db:push
```

Reset database:
```bash
npx prisma migrate reset
```

Open Prisma Studio:
```bash
npx prisma studio
```

## Troubleshooting

### Monaco Editor not loading

If the code editor doesn't load, try:
1. Clear browser cache
2. Check console for errors
3. Ensure `@monaco-editor/react` is properly installed

### Database connection errors

1. Verify DATABASE_URL in `.env`
2. Run `npm run db:push` to sync schema
3. Check file permissions for SQLite

### Authentication issues

1. Verify NEXTAUTH_SECRET is set
2. Clear browser cookies
3. Check NEXTAUTH_URL matches your domain

## Future Enhancements

Potential features to add:
- Video lessons support
- Discussion forums
- Peer code reviews
- Certificates of completion
- Course ratings and reviews
- AI-powered hints
- Collaborative coding
- Mobile app

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database ORM by [Prisma](https://www.prisma.io/)
- Authentication by [NextAuth.js](https://next-auth.js.org/)
- Icons by [Lucide](https://lucide.dev/)

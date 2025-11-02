# Quick Start Guide

Get your interactive learning platform up and running in 5 minutes!

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Generate a secret key:
```bash
openssl rand -base64 32
```

Paste it in `.env` as `NEXTAUTH_SECRET`

### 3. Setup Database
```bash
npm run db:push
npm run db:seed
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Browser
Navigate to: http://localhost:3000

## Demo Account

- **Email**: demo@example.com
- **Password**: password123

## What's Included

After seeding, you'll have:
- 3 sample courses (JavaScript, Python, Web Development)
- Multiple lessons with tutorials, exercises, and quizzes
- 1 demo user account

## Next Steps

1. Sign in with demo account
2. Browse available courses
3. Enroll in a course
4. Complete lessons and track progress
5. Try coding exercises with the live editor
6. Take quizzes and see instant feedback

## Creating Your Own Content

### Add a New Course

Edit `prisma/seed.ts` and add:

```typescript
const newCourse = await prisma.course.create({
  data: {
    title: 'Your Course Title',
    description: 'Course description',
    difficulty: 'beginner', // beginner, intermediate, advanced
    category: 'programming',
    lessons: {
      create: [
        {
          title: 'Lesson 1',
          description: 'Lesson description',
          content: '# Your markdown content here',
          type: 'tutorial',
          orderIndex: 0,
        },
      ],
    },
  },
});
```

Then run:
```bash
npm run db:seed
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Database Issues
```bash
npx prisma migrate reset
npm run db:seed
```

### Clear Everything and Start Fresh
```bash
rm -rf node_modules dev.db .next
npm install
npm run db:push
npm run db:seed
npm run dev
```

## Development Tips

- Use `npx prisma studio` to view/edit database
- Check browser console for errors
- Hot reload works for most changes
- Restart dev server after .env changes

## Production Deployment

### Vercel (Easiest)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production
```env
DATABASE_URL="postgresql://..." # Use PostgreSQL
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
```

## Resources

- [Full Documentation](./README.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Need Help?

- Check the README.md for detailed documentation
- Open an issue on GitHub
- Review error messages in the console

Happy building!

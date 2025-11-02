import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create demo user
  const hashedPassword = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      password: hashedPassword,
      name: 'Demo User',
    },
  });

  console.log('Created demo user:', user.email);

  // Create JavaScript course
  const jsCourse = await prisma.course.create({
    data: {
      title: 'JavaScript Fundamentals',
      description:
        'Master the basics of JavaScript programming with hands-on exercises and real-world examples.',
      difficulty: 'beginner',
      category: 'programming',
      lessons: {
        create: [
          {
            title: 'Introduction to JavaScript',
            description: 'Learn about JavaScript, its history, and why it\'s important.',
            content: `# Introduction to JavaScript

JavaScript is a versatile programming language that powers the modern web. Originally created to make web pages interactive, it has evolved into one of the most popular programming languages in the world.

## What is JavaScript?

JavaScript is a **high-level**, **interpreted** programming language that conforms to the ECMAScript specification. It's known for:

- Dynamic typing
- First-class functions
- Prototype-based object orientation
- Multi-paradigm support

## Why Learn JavaScript?

1. **Ubiquity**: Runs on every web browser
2. **Versatility**: Frontend, backend, mobile, and desktop applications
3. **Large Ecosystem**: Thousands of libraries and frameworks
4. **Career Opportunities**: High demand in the job market

## Your First JavaScript Code

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

This simple line of code outputs "Hello, World!" to the console. Let's break it down:

- \`console\` is a built-in object
- \`log()\` is a method that prints output
- The string in quotes is what gets displayed

## Variables and Data Types

JavaScript has several basic data types:

\`\`\`javascript
// Numbers
let age = 25;

// Strings
let name = "Alice";

// Booleans
let isStudent = true;

// Arrays
let colors = ["red", "green", "blue"];

// Objects
let person = {
  name: "Bob",
  age: 30
};
\`\`\`

Ready to continue your JavaScript journey? Let's move on to the next lesson!`,
            type: 'tutorial',
            orderIndex: 0,
          },
          {
            title: 'Functions Practice',
            description: 'Practice writing and using functions.',
            content: '',
            type: 'exercise',
            orderIndex: 1,
            exercises: {
              create: {
                title: 'Write a Sum Function',
                description: `Write a function called \`sum\` that takes two numbers as parameters and returns their sum.

Example:
- sum(5, 3) should return 8
- sum(10, -2) should return 8
- sum(0, 0) should return 0`,
                starterCode: `function sum(a, b) {
  // Write your code here

}`,
                solution: `function sum(a, b) {
  return a + b;
}`,
                testCases: JSON.stringify([
                  { input: [5, 3], expected: 8 },
                  { input: [10, -2], expected: 8 },
                  { input: [0, 0], expected: 0 },
                  { input: [100, 200], expected: 300 },
                ]),
                language: 'javascript',
              },
            },
          },
          {
            title: 'JavaScript Basics Quiz',
            description: 'Test your knowledge of JavaScript fundamentals.',
            content: '',
            type: 'quiz',
            orderIndex: 2,
            quizzes: {
              create: {
                title: 'JavaScript Basics Quiz',
                description: 'Test your understanding of basic JavaScript concepts.',
                questions: {
                  create: [
                    {
                      question: 'What is the correct way to declare a variable in JavaScript?',
                      type: 'multiple-choice',
                      options: JSON.stringify([
                        'variable myVar = 5;',
                        'let myVar = 5;',
                        'var myVar := 5;',
                        'dim myVar = 5;',
                      ]),
                      correctAnswer: 'B',
                      explanation:
                        'In modern JavaScript, we use `let` or `const` to declare variables. `var` is the old way and has different scoping rules.',
                      orderIndex: 0,
                    },
                    {
                      question: 'Is JavaScript a compiled language?',
                      type: 'true-false',
                      options: JSON.stringify(['True', 'False']),
                      correctAnswer: 'False',
                      explanation:
                        'JavaScript is an interpreted language. The code is executed line-by-line by the JavaScript engine without a separate compilation step.',
                      orderIndex: 1,
                    },
                    {
                      question: 'Which of the following is NOT a JavaScript data type?',
                      type: 'multiple-choice',
                      options: JSON.stringify([
                        'String',
                        'Number',
                        'Character',
                        'Boolean',
                      ]),
                      correctAnswer: 'C',
                      explanation:
                        'JavaScript does not have a separate "Character" type. Single characters are represented as strings of length 1.',
                      orderIndex: 2,
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });

  console.log('Created JavaScript course:', jsCourse.title);

  // Create Python course
  const pythonCourse = await prisma.course.create({
    data: {
      title: 'Python for Beginners',
      description:
        'Start your programming journey with Python, one of the most beginner-friendly languages.',
      difficulty: 'beginner',
      category: 'programming',
      lessons: {
        create: [
          {
            title: 'Welcome to Python',
            description: 'Introduction to Python programming.',
            content: `# Welcome to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. It's an excellent choice for beginners!

## Why Python?

Python is popular because:

1. **Easy to Learn**: Clean, readable syntax
2. **Versatile**: Web development, data science, AI, automation
3. **Large Community**: Extensive libraries and support
4. **Industry Standard**: Used by Google, NASA, Instagram, and more

## Hello World in Python

\`\`\`python
print("Hello, World!")
\`\`\`

That's it! Just one line to print output. Compare this to other languages and you'll see why Python is loved by beginners.

## Variables in Python

Python uses dynamic typing, so you don't need to declare variable types:

\`\`\`python
# Numbers
age = 25
price = 19.99

# Strings
name = "Alice"
greeting = 'Hello'

# Booleans
is_student = True
has_license = False

# Lists (similar to arrays)
fruits = ["apple", "banana", "cherry"]

# Dictionaries (key-value pairs)
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}
\`\`\`

## Python's Philosophy

Python follows the "Zen of Python" - principles that emphasize code readability and simplicity:

- Beautiful is better than ugly
- Simple is better than complex
- Readability counts

Let's continue learning Python!`,
            type: 'tutorial',
            orderIndex: 0,
          },
          {
            title: 'Python Functions Exercise',
            description: 'Learn to write functions in Python.',
            content: '',
            type: 'exercise',
            orderIndex: 1,
            exercises: {
              create: {
                title: 'Calculate Area',
                description: `Write a function called \`calculate_area\` that takes two parameters (length and width) and returns the area of a rectangle.

Example:
- calculate_area(5, 3) should return 15
- calculate_area(10, 2) should return 20`,
                starterCode: `def calculate_area(length, width):
    # Write your code here
    pass`,
                solution: `def calculate_area(length, width):
    return length * width`,
                testCases: JSON.stringify([
                  { input: [5, 3], expected: 15 },
                  { input: [10, 2], expected: 20 },
                  { input: [7, 7], expected: 49 },
                ]),
                language: 'python',
              },
            },
          },
        ],
      },
    },
  });

  console.log('Created Python course:', pythonCourse.title);

  // Create Web Development course
  const webCourse = await prisma.course.create({
    data: {
      title: 'Modern Web Development',
      description:
        'Learn HTML, CSS, and JavaScript to build beautiful, responsive websites.',
      difficulty: 'intermediate',
      category: 'web-development',
      lessons: {
        create: [
          {
            title: 'HTML Basics',
            description: 'Understanding the structure of web pages.',
            content: `# HTML Basics

HTML (HyperText Markup Language) is the foundation of all web pages. It provides the structure and content.

## What is HTML?

HTML uses **tags** to define elements on a page. Tags are enclosed in angle brackets:

\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

## Basic HTML Structure

Every HTML document follows this basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
\`\`\`

## Common HTML Elements

### Headings
\`\`\`html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>
\`\`\`

### Paragraphs and Text
\`\`\`html
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
\`\`\`

### Links
\`\`\`html
<a href="https://example.com">Click here</a>
\`\`\`

### Images
\`\`\`html
<img src="image.jpg" alt="Description">
\`\`\`

### Lists
\`\`\`html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
\`\`\`

## Semantic HTML

Modern HTML emphasizes using semantic tags that describe their content:

\`\`\`html
<header>Page header</header>
<nav>Navigation menu</nav>
<main>Main content</main>
<article>Article content</article>
<footer>Page footer</footer>
\`\`\`

HTML is just the beginning. Next, we'll learn CSS to style our pages!`,
            type: 'tutorial',
            orderIndex: 0,
          },
        ],
      },
    },
  });

  console.log('Created Web Development course:', webCourse.title);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

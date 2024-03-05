# Contribution Guidelines

Thank you for considering contributing to DineCraft! We appreciate your interest in improving our restaurant management system. Before you contribute, please take a moment to review the guidelines outlined below.

## System Requirements:

### Development Environment:
- Node.js (v14.x or later)
- npm (v6.x or later)

### Frontend:
- Next.js (v12.x or later)
- React (v17.x or later)

### Backend:
- Express.js (v4.x or later)
- PostgreSQL
- Sequelize or TypeORM

### Database:
- PostgreSQL (v10.x or later)

### Services:
- Docker

## Contribution Guidelines:

1. **Fork the Repository:** Start by forking the DineCraft repository to your GitHub account.

2. **Clone the Repository:** Clone the forked repository to your local machine using the following command:

```git clone https://github.com/yourusername/dinecraft.git```

3. **Setup Environment:**
- Create a `.env` file in the root directory of the project.
- Copy the contents from `.env.sample` to `.env` file and fill in the required environment variables.

4. **Install Dependencies:** Navigate to the project directory and install the required dependencies:

>cd dinecraft
>npm install


5. **Start PostgreSQL Service:** Run the PostgreSQL service using Docker Compose. Make sure you have Docker installed on your machine.

>docker-compose up -d postgres

6. **Create Database:** Once PostgreSQL is running, create the necessary database for DineCraft.

7. **Run Migrations:** If using Sequelize, run migrations to create the database schema.

> npx sequelize-cli db:migrate


8. **Run the Application:** Start the DineCraft application:

> npm run dev

## Code Review Process:

All contributions will undergo a code review process to ensure quality, consistency, and adherence to best practices. Please be patient during the review process, and be open to feedback and suggestions for improvement.

## Help and Support:

If you have any questions or need assistance with your contribution, feel free to reach out to the project maintainers or the community through GitHub issues or our communication channels.

## Contributor License Agreement:

By contributing to DineCraft, you agree to abide by the project's [Contributor License Agreement](CLA.md).

Thank you for your contributions to making DineCraft a better restaurant management system!

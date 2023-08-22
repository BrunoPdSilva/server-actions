-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "descriptions" TEXT,
    "isCompleted" BOOLEAN NOT NULL
);

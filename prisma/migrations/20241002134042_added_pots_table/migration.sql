-- CreateTable
CREATE TABLE "pots" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "saved" INTEGER NOT NULL DEFAULT 0,
    "target" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pots" ADD CONSTRAINT "pots_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "mobile" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "deliveryPrice" DROP NOT NULL,
ALTER COLUMN "sum" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

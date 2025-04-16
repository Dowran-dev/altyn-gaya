// lib/prisma.ts
// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ['query'], // Optional: logs every query
//   });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export default prisma;




// // lib/prisma.ts
// import { PrismaClient } from '@prisma/client';

// // Define an interface for the custom global with prisma
// interface CustomNodeJsGlobal {
//   prisma: PrismaClient | undefined;
// }

// // Declare the global this way to avoid namespace
// declare const global: CustomNodeJsGlobal;

// // Prevent multiple instances of Prisma Client in development
// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV === 'development') {
//   global.prisma = prisma;
// }

// export default prisma;

// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

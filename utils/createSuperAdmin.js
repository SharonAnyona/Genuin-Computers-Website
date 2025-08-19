const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createSuperAdmin() {
  try {
    const email = 'superadmin@genuin.com';
    const password = 'SuperAdmin123!'; // Change this to a secure password
    
    // Check if super admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: { email: email }
    });
    
    if (existingAdmin) {
      console.log('Super admin already exists');
      return;
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create super admin user
    const superAdmin = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        role: 'super_admin'
      }
    });
    
    console.log('Super admin created successfully:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Please change the password after first login!');
    
  } catch (error) {
    console.error('Error creating super admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createSuperAdmin();

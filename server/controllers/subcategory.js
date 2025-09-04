const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new subcategory
async function createSubcategory(req, res) {
  try {
    const { name, categoryId } = req.body;
    if (!name || !categoryId) {
      return res
        .status(400)
        .json({ error: "Name and categoryId are required" });
    }
    // Generate slug
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const subcategory = await prisma.subcategory.create({
      data: { name, slug, categoryId },
    });
    return res.status(201).json(subcategory);
  } catch (error) {
    console.error("Error creating subcategory:", error);
    return res.status(500).json({ error: "Error creating subcategory" });
  }
}

module.exports = { createSubcategory };

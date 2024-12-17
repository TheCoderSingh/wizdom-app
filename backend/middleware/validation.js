const isValidWebsite = (url) => {
  const regex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;
  if (!regex.test(url)) {
    return { isValid: false, message: "Invalid website URL format." };
  }
  return { isValid: true };
};

const hasValidSkills = (skills) => {
  if (!Array.isArray(skills) || skills.length === 0) {
    return { isValid: false, message: "At least one skill is required." };
  }
  return { isValid: true };
};

const validateUserInput = (req, res, next) => {
  const {
    email,
    password,
    name,
    website, // Optional
    role,
    yearsOfExperience,
    skills,
  } = req.body;

  // Check required fields
  if (!email || !password || !name || !role || !yearsOfExperience) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  // Check Password length valid
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  // Check website is valid
  if (website && !isValidWebsite(website).isValid) {
    return res.status(400).json({ message: "Invalid website URL format" });
  }

  // Check skills is valid
  if (!hasValidSkills(skills).isValid) {
    return res.status(400).json({ message: "At least one skill is required" });
  }
  next();
};

module.exports = {
  isValidWebsite,
  hasValidSkills,
  validateUserInput,
};

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

module.exports = {
  isValidWebsite,
  hasValidSkills,
};

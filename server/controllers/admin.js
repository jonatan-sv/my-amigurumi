import service from "../services/admin.js";

export const getAdminPanel = async (req, res) => {
  try {
    const result = await service();
    res.status(200).json(result);
  } catch (e) {
    res.send({ success: false });
  }
};

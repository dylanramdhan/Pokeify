const accService = require("./AccService");

exports.getAllAccs = async (req, res) => {
  try {
    const accs = await accService.getAllAccs();
    res.json({ data: accs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAcc = async (req, res) => {
  try {
    const acc = await accService.createAcc(req.body);
    res.json({ data: acc, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAccById = async (req, res) => {
  try {
    const acc = await accService.getAccById(req.params.id);
    res.json({ data: acc, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAcc = async (req, res) => {
  try {
    const acc = await accService.updateAcc(req.params.id, req.body);
    res.json({ data: acc, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAcc = async (req, res) => {
  try {
    const acc = await accService.deleteAcc(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

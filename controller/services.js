let services = [];

const getAllServices = (req, res) => {
  res.json(services);
}

const createService = (req, res) => {
  const { name, imageURL, desc } = req.body;

  const newService = {
    name: name,
    imageURL: imageURL,
    desc: desc
  }

  services = [...services, newService];
}